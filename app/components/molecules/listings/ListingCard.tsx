"use client";

import useCountries from "@/app/hooks/useCountries";
import { Listing, Reservation, User } from "@prisma/client";
import { useRouter } from "next/navigation";
import React, { useCallback, useMemo } from "react";
import { format } from "date-fns";
import Button from "../../atoms/Buttons/Button";
import Image from "next/image";
import HeartButton from "../../atoms/Buttons/HeartButton";
import { motion } from "framer-motion";

interface ListingCardProps {
  data: Listing;
  reservation?: Reservation;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
  currentUser?: User | null;
}

const ListingCard: React.FC<ListingCardProps> = ({
  data,
  reservation,
  onAction,
  disabled,
  actionLabel,
  actionId = "",
  currentUser,
}) => {
  const router = useRouter();
  const { getByValue } = useCountries();

  const location = getByValue(data.locationValue);
  const handleCancel = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      if (disabled) {
        return;
      }
      onAction?.(actionId);
    },
    [onAction, actionId, disabled]
  );

  const price = useMemo(() => {
    if (reservation) {
      return reservation.totalPrice;
    }
    return data.price;
  }, [data.price, reservation]);

  const reservationDate = useMemo(() => {
    if (!reservation) {
      return null;
    }

    const start = new Date(reservation.startDate);
    const end = new Date(reservation.endDate);

    return `${format(start, "PP")} - ${format(end, "PP")}`;
  }, [reservation]);
  return (
    <div
      onClick={() => router.push(`/listings/${data.id}`)}
      className="col-span-1 cursor-pointer p-2 group hover:bg-gradient-to-t  hover:from-fourth  hover:via-white hover:to-white rounded-xl hover:scale-105 transition"
    >
      <div className="flex flex-col gap-2 w-full">
        <div
          className="
        aspect-square 
        w-full 
        relative 
        overflow-hidden 
        rounded-xl
      "
        >
          <Image
            fill
            className="
          object-cover 
          h-full 
          w-full 
          group-hover:scale-101 
          transition
        "
            src={data.imageSrc}
            alt="Listing"
          />
          <div
            className="
        absolute
        top-3
        right-3
      "
          >
            <HeartButton listingId={data.id} currentUser={currentUser} />
          </div>
        </div>
        <div className="flex flex-row items-center px-2 leading-4 mt-3">
          <div className="font-semibold">
            <span className="text-secondary">$</span> {price}
          </div>
        </div>
        <div className="font-bold text-2xl text-primary px-2 leading-6">
          {reservationDate || data.title}
        </div>
        <div className="font-bold text-lg px-2 mb-3">
          {location?.region}, {location?.label}
        </div>
        {onAction && actionLabel && (
          <Button
            disabled={disabled}
            small
            label={actionLabel}
            onClick={handleCancel}
          />
        )}
      </div>
    </div>
  );
};

export default ListingCard;
