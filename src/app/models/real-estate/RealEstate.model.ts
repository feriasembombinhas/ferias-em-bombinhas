export interface RealEstate {

  id: number;
  name: string;
  slug: string,
  imgCapa: string,
  details: {
    local: string,
    rooms: number,
    bathrooms: number,
    peoples: number
  }
  description1: string,
  finds: RealEstateFind[],
  description2: string,
  location: string,
  cords: {
    lat: string,
    lon: string
  },

  images: Array<string>
}

interface RealEstateFind {
  text: string;
  icon: string;
  color: string;
}
