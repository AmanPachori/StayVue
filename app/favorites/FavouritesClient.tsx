import { Listing, User } from "@prisma/client";
import React from "react";
import Heading from "../components/atoms/Heading/Heading";
import Container from "../components/Container";
import ListingCard from "../components/molecules/listings/ListingCard";
import { SafeListing } from "../types";

interface FavoritesClientProps {
  listings: SafeListing[];
  currentUser: User;
}

const FavoritesClient: React.FC<FavoritesClientProps> = ({
  listings,
  currentUser,
}) => {
  return (
    <Container>
      <Heading title="Favorites" subtitle="List of places you favorited!" />
      <div
        className="
          mt-10
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-4

          gap-8
        "
      >
        {listings.map((listing: any) => (
          <ListingCard
            currentUser={currentUser}
            key={listing.id}
            data={listing}
          />
        ))}
      </div>
    </Container>
  );
};

export default FavoritesClient;
