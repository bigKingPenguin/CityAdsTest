import {BASE_URL, RequestAddresses} from "~/constants/url";
import type {Offer} from "~/composables/types/offer";

// type GetOffersData = {
//     domain: string,
//     comment?: string,
//     autoSortOffers: boolean,
//     offers: Offer[],
//     created: number,
//     id: string,
//     updated: number,
//     legalAddress: string,
//     name: string,
//     ogrnip: number,
//     tin: number
// }

// type GetOffersResponse = {
//     ok: boolean,
//     _data: GetOffersData
// }

export const getOffers = async () => {
    try {
        const {data} = await useFetch(RequestAddresses.get_offers, {
            method: 'GET',
            baseURL: BASE_URL,
        })

        if (data.value) {
            return data.value
        }
    } catch (error) {
        throw new Error(error ? error.message : 'Something went wrong')
    }


    // onResponse({response}): Promise<GetOffersData> | void {
    //     if (response) {
    //         console.log(response)
    //         return response._data
    //     }
    // },
    //     onResponseError({error}) {
    //
    // }
}