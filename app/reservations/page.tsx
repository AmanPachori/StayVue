import React from "react";

import EmptyState from "../components/EmptyState";
import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";
import ReservationsClient from "./ReservationClient";

const ReservationsPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title="Unauthorized" subtitle="Please Login" />;
  }

  const reservations = await getReservations({
    authorId: currentUser.id,
  });

  if (reservations.length === 0) {
    return (
      <EmptyState
        title="No Reservation Found"
        subtitle="Looks like you have no reservations"
      />
    );
  }

  return (
    <>
      <ReservationsClient
        reservations={reservations}
        currentUser={currentUser}
      />
    </>
  );
};

export default ReservationsPage;
