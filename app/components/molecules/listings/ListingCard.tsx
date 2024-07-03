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
import { IoLocationOutline } from "react-icons/io5";
import { FaDollarSign } from "react-icons/fa";

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
      className="col-span-1 cursor-pointer transition rounded-xl min-h-[260px] max-w-[310px] mx-1 border"
    >
      <div className="flex flex-col gap-1 w-full">
        <div
          className="
        aspect-video 
        w-full 
        relative 
        overflow-hidden
        "
        >
          <Image
            fill
            className="
            rounded-t-xl 
          object-cover 
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
        <div className="h-[100px]">
          <div className="flex justify-between leading-2 mt-2">
            <div className="font-bold text-base text-black px-2 leading-6">
              {reservationDate || data.title}
            </div>
            <div className="font-bold flex items-center text-base px-2 text-primary">
              <FaDollarSign />
              {price}
            </div>
          </div>
          <div className="flex justify-between">
            <div className="font-normal px-2 text-sm flex items-center">
              {location?.region}, {location?.label}
            </div>
          </div>
        </div>
        <div className="font-bold px-2 text-secondary ">
          <div className="border-gray-200 border-2 w-fit px-2 rounded ">
            {data?.category}
          </div>
        </div>
        <div className="p-2">
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
    </div>
  );
};

export default ListingCard;
