import getCurrentUser from "../actions/getCurrentUser";
import getFavoriteListings from "../actions/getFavoriteListings";
import ClientOnly from "../components/ClientOnly";
import EmptyState from "../components/EmptyState";

import React from 'react'
import FavoritesClient from "./FavoritesClient";

const ListingPage =  async () => {

    const listings = await getFavoriteListings()
    const currentUser = await getCurrentUser()

    if (listings.length === 0) {
        return (
            <ClientOnly>
                <EmptyState
                    title = 'No Favorites found'
                    subtitle = 'Look like you have no favorite listings.'
                />
            </ClientOnly>
        )
    }


  return (
    <ClientOnly>
        <FavoritesClient
            listings = {listings}
            currentUser = {currentUser}
        />
    </ClientOnly>
  )
}

export default ListingPage