export interface Location {
    name: string;
    slug: string;
    region: string;
    displayName: string; // e.g. "Barrow County"
    mapQuery: string; // e.g. "Barrow County, GA"
}

export const REGIONS = [
    "Greater Metro Atlanta",
    "North Georgia",
    "Metro Athens-Clarke County",
    "Middle Georgia"
] as const;

export const LOCATIONS: Location[] = [
    // Greater Metro Atlanta
    { name: "Barrow County DUI Lawyer", slug: "barrow-county", region: "Greater Metro Atlanta", displayName: "Barrow County", mapQuery: "Barrow County, GA" },
    { name: "Carroll County DUI Lawyer", slug: "carroll-county", region: "Greater Metro Atlanta", displayName: "Carroll County", mapQuery: "Carroll County, GA" },
    { name: "Cherokee County DUI Lawyer", slug: "cherokee-county", region: "Greater Metro Atlanta", displayName: "Cherokee County", mapQuery: "Cherokee County, GA" },
    { name: "Clayton County DUI Lawyer", slug: "clayton-county", region: "Greater Metro Atlanta", displayName: "Clayton County", mapQuery: "Clayton County, GA" },
    { name: "Cobb County DUI Lawyer", slug: "cobb-county", region: "Greater Metro Atlanta", displayName: "Cobb County", mapQuery: "Cobb County, GA" },
    { name: "Coweta County DUI Lawyer", slug: "coweta-county", region: "Greater Metro Atlanta", displayName: "Coweta County", mapQuery: "Coweta County, GA" },
    { name: "DeKalb County DUI Lawyer", slug: "dekalb-county", region: "Greater Metro Atlanta", displayName: "DeKalb County", mapQuery: "DeKalb County, GA" },
    { name: "Douglas County DUI Lawyer", slug: "douglas-county", region: "Greater Metro Atlanta", displayName: "Douglas County", mapQuery: "Douglas County, GA" },
    { name: "Fayette County DUI Lawyer", slug: "fayette-county", region: "Greater Metro Atlanta", displayName: "Fayette County", mapQuery: "Fayette County, GA" },
    { name: "Forsyth County DUI Lawyer", slug: "forsyth-county", region: "Greater Metro Atlanta", displayName: "Forsyth County", mapQuery: "Forsyth County, GA" },
    { name: "Fulton County DUI Lawyer", slug: "fulton-county", region: "Greater Metro Atlanta", displayName: "Fulton County", mapQuery: "Fulton County, GA" },
    { name: "Gwinnett County DUI Lawyer", slug: "gwinnett-county", region: "Greater Metro Atlanta", displayName: "Gwinnett County", mapQuery: "Gwinnett County, GA" },
    { name: "Hall County DUI Lawyer", slug: "hall-county", region: "Greater Metro Atlanta", displayName: "Hall County", mapQuery: "Hall County, GA" },
    { name: "Henry County DUI Lawyer", slug: "henry-county", region: "Greater Metro Atlanta", displayName: "Henry County", mapQuery: "Henry County, GA" },
    { name: "Jackson County DUI Lawyer", slug: "jackson-county", region: "Greater Metro Atlanta", displayName: "Jackson County", mapQuery: "Jackson County, GA" },
    { name: "Newton County DUI Lawyer", slug: "newton-county", region: "Greater Metro Atlanta", displayName: "Newton County", mapQuery: "Newton County, GA" },
    { name: "Paulding County DUI Lawyer", slug: "paulding-county", region: "Greater Metro Atlanta", displayName: "Paulding County", mapQuery: "Paulding County, GA" },
    { name: "Rockdale County DUI Lawyer", slug: "rockdale-county", region: "Greater Metro Atlanta", displayName: "Rockdale County", mapQuery: "Rockdale County, GA" },
    { name: "Spalding County DUI Lawyer", slug: "spalding-county", region: "Greater Metro Atlanta", displayName: "Spalding County", mapQuery: "Spalding County, GA" },
    { name: "Walton County DUI Lawyer", slug: "walton-county", region: "Greater Metro Atlanta", displayName: "Walton County", mapQuery: "Walton County, GA" },

    // North Georgia
    { name: "Banks County DUI Lawyer", slug: "banks-county", region: "North Georgia", displayName: "Banks County", mapQuery: "Banks County, GA" },
    { name: "Bartow County DUI Lawyer", slug: "bartow-county", region: "North Georgia", displayName: "Bartow County", mapQuery: "Bartow County, GA" },
    { name: "Catoosa County DUI Lawyer", slug: "catoosa-county", region: "North Georgia", displayName: "Catoosa County", mapQuery: "Catoosa County, GA" },
    { name: "Chattooga County DUI Lawyer", slug: "chattooga-county", region: "North Georgia", displayName: "Chattooga County", mapQuery: "Chattooga County, GA" },
    { name: "Dade County DUI Lawyer", slug: "dade-county", region: "North Georgia", displayName: "Dade County", mapQuery: "Dade County, GA" },
    { name: "Dawson County DUI Lawyer", slug: "dawson-county", region: "North Georgia", displayName: "Dawson County", mapQuery: "Dawson County, GA" },
    { name: "Fannin County DUI Lawyer", slug: "fannin-county", region: "North Georgia", displayName: "Fannin County", mapQuery: "Fannin County, GA" },
    { name: "Floyd County DUI Lawyer", slug: "floyd-county", region: "North Georgia", displayName: "Floyd County", mapQuery: "Floyd County, GA" },
    { name: "Franklin County DUI Lawyer", slug: "franklin-county", region: "North Georgia", displayName: "Franklin County", mapQuery: "Franklin County, GA" },
    { name: "Gilmer County DUI Lawyer", slug: "gilmer-county", region: "North Georgia", displayName: "Gilmer County", mapQuery: "Gilmer County, GA" },
    { name: "Gordon County DUI Lawyer", slug: "gordon-county", region: "North Georgia", displayName: "Gordon County", mapQuery: "Gordon County, GA" },
    { name: "Habersham County DUI Lawyer", slug: "habersham-county", region: "North Georgia", displayName: "Habersham County", mapQuery: "Habersham County, GA" },
    { name: "Haralson County DUI Lawyer", slug: "haralson-county", region: "North Georgia", displayName: "Haralson County", mapQuery: "Haralson County, GA" },
    { name: "Lumpkin County DUI Lawyer", slug: "lumpkin-county", region: "North Georgia", displayName: "Lumpkin County", mapQuery: "Lumpkin County, GA" },
    { name: "Murray County DUI Lawyer", slug: "murray-county", region: "North Georgia", displayName: "Murray County", mapQuery: "Murray County, GA" },
    { name: "Pickens County DUI Lawyer", slug: "pickens-county", region: "North Georgia", displayName: "Pickens County", mapQuery: "Pickens County, GA" },
    { name: "Polk County DUI Lawyer", slug: "polk-county", region: "North Georgia", displayName: "Polk County", mapQuery: "Polk County, GA" },
    { name: "Rabun County DUI Lawyer", slug: "rabun-county", region: "North Georgia", displayName: "Rabun County", mapQuery: "Rabun County, GA" },
    { name: "Stephens County DUI Lawyer", slug: "stephens-county", region: "North Georgia", displayName: "Stephens County", mapQuery: "Stephens County, GA" },
    { name: "Towns County DUI Lawyer", slug: "towns-county", region: "North Georgia", displayName: "Towns County", mapQuery: "Towns County, GA" },
    { name: "Union County DUI Lawyer", slug: "union-county", region: "North Georgia", displayName: "Union County", mapQuery: "Union County, GA" },
    { name: "Walker County DUI Lawyer", slug: "walker-county", region: "North Georgia", displayName: "Walker County", mapQuery: "Walker County, GA" },
    { name: "White County DUI Lawyer", slug: "white-county", region: "North Georgia", displayName: "White County", mapQuery: "White County, GA" },
    { name: "Whitfield County DUI Lawyer", slug: "whitfield-county", region: "North Georgia", displayName: "Whitfield County", mapQuery: "Whitfield County, GA" },

    // Metro Athens-Clarke County
    { name: "Athens-Clarke County DUI Lawyer", slug: "athens-clarke-county", region: "Metro Athens-Clarke County", displayName: "Athens-Clarke County", mapQuery: "Athens-Clarke County, GA" },
    { name: "Elbert County DUI Lawyer", slug: "elbert-county", region: "Metro Athens-Clarke County", displayName: "Elbert County", mapQuery: "Elbert County, GA" },
    { name: "Greene County DUI Lawyer", slug: "greene-county", region: "Metro Athens-Clarke County", displayName: "Greene County", mapQuery: "Greene County, GA" },
    { name: "Hart County DUI Lawyer", slug: "hart-county", region: "Metro Athens-Clarke County", displayName: "Hart County", mapQuery: "Hart County, GA" },
    { name: "Madison County DUI Lawyer", slug: "madison-county", region: "Metro Athens-Clarke County", displayName: "Madison County", mapQuery: "Madison County, GA" },
    { name: "Morgan County DUI Lawyer", slug: "morgan-county", region: "Metro Athens-Clarke County", displayName: "Morgan County", mapQuery: "Morgan County, GA" },
    { name: "Oconee County DUI Lawyer", slug: "oconee-county", region: "Metro Athens-Clarke County", displayName: "Oconee County", mapQuery: "Oconee County, GA" },
    { name: "Oglethorpe County DUI Lawyer", slug: "oglethorpe-county", region: "Metro Athens-Clarke County", displayName: "Oglethorpe County", mapQuery: "Oglethorpe County, GA" },

    // Middle Georgia
    { name: "Baldwin County DUI Lawyer", slug: "baldwin-county", region: "Middle Georgia", displayName: "Baldwin County", mapQuery: "Baldwin County, GA" },
    { name: "Bibb County DUI Lawyer", slug: "bibb-county", region: "Middle Georgia", displayName: "Bibb County", mapQuery: "Bibb County, GA" },
    { name: "Butts County DUI Lawyer", slug: "butts-county", region: "Middle Georgia", displayName: "Butts County", mapQuery: "Butts County, GA" },
    { name: "Crawford County DUI Lawyer", slug: "crawford-county", region: "Middle Georgia", displayName: "Crawford County", mapQuery: "Crawford County, GA" },
    { name: "Harris County DUI Lawyer", slug: "harris-county", region: "Middle Georgia", displayName: "Harris County", mapQuery: "Harris County, GA" },
    { name: "Heard County DUI Lawyer", slug: "heard-county", region: "Middle Georgia", displayName: "Heard County", mapQuery: "Heard County, GA" },
    { name: "Houston County DUI Lawyer", slug: "houston-county", region: "Middle Georgia", displayName: "Houston County", mapQuery: "Houston County, GA" },
    { name: "Jasper County DUI Lawyer", slug: "jasper-county", region: "Middle Georgia", displayName: "Jasper County", mapQuery: "Jasper County, GA" },
    { name: "Jones County DUI Lawyer", slug: "jones-county", region: "Middle Georgia", displayName: "Jones County", mapQuery: "Jones County, GA" },
    { name: "Lamar County DUI Lawyer", slug: "lamar-county", region: "Middle Georgia", displayName: "Lamar County", mapQuery: "Lamar County, GA" },
    { name: "Meriwether County DUI Lawyer", slug: "meriwether-county", region: "Middle Georgia", displayName: "Meriwether County", mapQuery: "Meriwether County, GA" },
    { name: "Monroe County DUI Lawyer", slug: "monroe-county", region: "Middle Georgia", displayName: "Monroe County", mapQuery: "Monroe County, GA" },
    { name: "Muscogee County DUI Lawyer", slug: "muscogee-county", region: "Middle Georgia", displayName: "Muscogee County", mapQuery: "Muscogee County, GA" },
    { name: "Peach County DUI Lawyer", slug: "peach-county", region: "Middle Georgia", displayName: "Peach County", mapQuery: "Peach County, GA" },
    { name: "Pike County DUI Lawyer", slug: "pike-county", region: "Middle Georgia", displayName: "Pike County", mapQuery: "Pike County, GA" },
    { name: "Putnam County DUI Lawyer", slug: "putnam-county", region: "Middle Georgia", displayName: "Putnam County", mapQuery: "Putnam County, GA" },
    { name: "Talbot County DUI Lawyer", slug: "talbot-county", region: "Middle Georgia", displayName: "Talbot County", mapQuery: "Talbot County, GA" },
    { name: "Troup County DUI Lawyer", slug: "troup-county", region: "Middle Georgia", displayName: "Troup County", mapQuery: "Troup County, GA" },
    { name: "Twiggs County DUI Lawyer", slug: "twiggs-county", region: "Middle Georgia", displayName: "Twiggs County", mapQuery: "Twiggs County, GA" },
    { name: "Upson County DUI Lawyer", slug: "upson-county", region: "Middle Georgia", displayName: "Upson County", mapQuery: "Upson County, GA" },
];
