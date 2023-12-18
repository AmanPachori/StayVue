import React from "react";
import EmptyState from "../components/EmptyState";
import getCurrentUser from "../actions/getCurrentUser";
import TripsClient from "./TripsClient";
import getReservations from "../actions/getReservations";

const TripsPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <>
        <EmptyState title="Unauthorized User" subtitle="Please Login" />
      </>
    );
  }

  const reservations = await getReservations({
    userId: currentUser.id,
  });

  if (reservations.length === 0) {
    return (
      <>
        <EmptyState
          title="No trips Found"
          subtitle="Looks Like you haven't reserved any trips"
        />
      </>
    );
  }
  return (
    <div>
      <TripsClient reservations={reservations} currentUser={currentUser} />
    </div>
  );
};

export default TripsPage;
