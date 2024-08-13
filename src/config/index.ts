/**
 * * Categories for marektplace
 */
export const POSHPUNK_CATEGORIES = [
    {
        label: "Art",
        value: "art" as const,
        featured: [
            {
                label: "Art for Sale",
                value: "featured" as const,
                imageSrc: "/images/art/featured-art.jpg",
            },
            {
                label: "Digital Art",
                value: "digital" as const,
                imageSrc: "/images/art/digital-art.jpg",
            },
            {
                label: "Physical Art",
                value: "physical" as const,
                imageSrc: "/images/art/physical-art.jpg",
            },
        ],
    },
    {
        label: "Collectibles",
        value: "collectibles" as const,
        featured: [
            {
                label: "You Need This",
                value: "featured" as const,
                imageSrc: "/images/collectibles/featured-collectibles.jpg",
            },
            {
                label: "Rare Finds",
                value: "rare" as const,
                imageSrc: "/images/collectibles/rare-finds.jpg",
            },
            {
                label: "Vintage",
                value: "vintage" as const,
                imageSrc: "/images/collectibles/vintage.jpg",
            },
        ],
    },
    {
        label: "DIY",
        value: "diy" as const,
        featured: [
            {
                label: "The Printing Press",
                value: "featured" as const,
                imageSrc: "/images/diy/featured-diy.jpg",
            },
            {
                label: "Sewing Machines",
                value: "sewing" as const,
                imageSrc: "/images/diy/sewing-machine.jpg",
            },
            {
                label: "Tools",
                value: "tools" as const,
                imageSrc: "/images/diy/tools.jpg",
            },
        ],
    },
    {
        label: "Fashion",
        value: "fashion" as const,
        featured: [
            {
                label: "Damn",
                value: "featured" as const,
                imageSrc: "/images/fashion/featured-fashion.jpg",
            },
            {
                label: "Clothing",
                value: "clothing" as const,
                imageSrc: "/images/fashion/clothing.jpg",
            },
            {
                label: "Shoes",
                value: "shoes" as const,
                imageSrc: "/images/fashion/shoes.jpg",
            },
        ],
    },
    {
        label: "Music",
        value: "music" as const,
        featured: [
            {
                label: "Vinyl",
                value: "vinyl" as const,
                imageSrc: "/images/music/vinyl.jpg",
            },
            {
                label: "Cassettes",
                value: "cassettes" as const,
                imageSrc: "/images/music/cassettes.jpg",
            },
            {
                label: "CDs",
                value: "cds" as const,
                imageSrc: "/images/music/cds.jpg",
            },
        ],
    },
];
