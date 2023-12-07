"use client";

import React, { useCallback, useState } from "react";
import { SafeReservation, SafeUser } from "../types";
import Container from "../components/Container";
import Heading from "../components/atoms/Heading/Heading";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import ListingCard from "../components/molecules/listings/ListingCard";
import { Reservation, User } from "@prisma/client";

interface TripsClientProps {
  reservations: SafeReservation[];
  currentUser?: User | null;
}

const TripsClient: React.FC<TripsClientProps> = ({
  reservations,
  currentUser,
}) => {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState("");

  const onCancel = useCallback(
    (id: string) => {
      setDeletingId(id);

      new Promise((resolve) => setTimeout(resolve, 4000));
      axios
        .delete(`api/reservations/${id}`)
        .then(() => {
          toast.success("Reservation deleted successfully");
          router.refresh();
        })
        .catch((error) => {
          toast.error(error?.resposne?.data?.error);
        })
        .finally(() => {
          setDeletingId("");
        });
    },
    [router]
  );
  return (
    <Container>
      <Heading
        title="Trips"
        subtitle="Where you've been and where you're going "
      />
      <div
        className="mt-10
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-4

          gap-8"
      >
        {reservations?.map((reservation: any) => (
          <ListingCard
            key={reservation.id}
            data={reservation.listing}
            reservation={reservation}
            actionId={reservation.id}
            onAction={onCancel}
            disabled={deletingId === reservation.id}
            actionLabel="Cancel reservation"
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  );
};

export default TripsClient;
