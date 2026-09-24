// data/galleryData.ts
export interface GalleryItem {
  id: number;
  title: string;
  category: string;
  subCategory: string;
  badge: string;
  image: string;
  alt: string;
}

export const galleryCategories = ['All', 'Non-Woven', 'Canvas', 'Lokta Paper', 'Kraft & Paper', 'Factory & Showroom'] as const;

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: 'Canvas Tote Bag Design #1',
    category: 'Canvas',
    subCategory: 'Canvas Tote Bag',
    badge: 'Canvas',
    image: '/asset/gallery-studio/gallery-1.jpg',
    alt: 'Canvas Tote Bag Design #1 - Eco Print & Pack Nepal'
  },
  {
    id: 2,
    title: 'Canvas Tote Bag Design #2',
    category: 'Canvas',
    subCategory: 'Canvas Tote Bag',
    badge: 'Canvas',
    image: '/asset/gallery-studio/gallery-2.jpg',
    alt: 'Canvas Tote Bag Design #2 - Eco Print & Pack Nepal'
  },
  {
    id: 3,
    title: 'Canvas Tote Bag Design #3',
    category: 'Canvas',
    subCategory: 'Canvas Tote Bag',
    badge: 'Canvas',
    image: '/asset/gallery-studio/gallery-3.jpg',
    alt: 'Canvas Tote Bag Design #3 - Eco Print & Pack Nepal'
  },
  {
    id: 5,
    title: 'Canvas Tote Bag Design #5',
    category: 'Canvas',
    subCategory: 'Canvas Tote Bag',
    badge: 'Canvas',
    image: '/asset/gallery-studio/gallery-5.jpg',
    alt: 'Canvas Tote Bag Design #5 - Eco Print & Pack Nepal'
  },
  {
    id: 6,
    title: 'Canvas Tote Bag Design #6',
    category: 'Canvas',
    subCategory: 'Canvas Tote Bag',
    badge: 'Canvas',
    image: '/asset/gallery-studio/gallery-6.jpg',
    alt: 'Canvas Tote Bag Design #6 - Eco Print & Pack Nepal'
  },
  {
    id: 7,
    title: 'Canvas Tote Bag Design #7',
    category: 'Canvas',
    subCategory: 'Canvas Tote Bag',
    badge: 'Canvas',
    image: '/asset/gallery-studio/gallery-7.jpg',
    alt: 'Canvas Tote Bag Design #7 - Eco Print & Pack Nepal'
  },
  {
    id: 8,
    title: 'Canvas Tote Bag Design #8',
    category: 'Canvas',
    subCategory: 'Canvas Tote Bag',
    badge: 'Canvas',
    image: '/asset/gallery-studio/gallery-8.jpg',
    alt: 'Canvas Tote Bag Design #8 - Eco Print & Pack Nepal'
  },
  {
    id: 9,
    title: 'Lokta Paper Bag Design #1',
    category: 'Lokta Paper',
    subCategory: 'Lokta Paper Bag',
    badge: 'Lokta',
    image: '/asset/gallery-studio/gallery-11.jpg',
    alt: 'Lokta Paper Bag Design #1 - Eco Print & Pack Nepal'
  },
  {
    id: 10,
    title: 'Lokta Paper Bag Design #2',
    category: 'Lokta Paper',
    subCategory: 'Lokta Paper Bag',
    badge: 'Lokta',
    image: '/asset/gallery-studio/gallery-13.jpg',
    alt: 'Lokta Paper Bag Design #2 - Eco Print & Pack Nepal'
  },
  {
    id: 11,
    title: 'Lokta Paper Bag Design #3',
    category: 'Lokta Paper',
    subCategory: 'Lokta Paper Bag',
    badge: 'Lokta',
    image: '/asset/products-studio/lokta-wine.jpg',
    alt: 'Botanical Petal Lokta Paper Bag Design #3 - Eco Print & Pack Nepal'
  },
  {
    id: 12,
    title: 'Lokta Paper Bag Design #4',
    category: 'Lokta Paper',
    subCategory: 'Lokta Paper Bag',
    badge: 'Lokta',
    image: '/asset/products-studio/lokta-shopper.jpg',
    alt: 'Artisanal Textured Indigo Lokta Paper Bag Design #4 - Eco Print & Pack Nepal'
  },
  {
    id: 13,
    title: 'Lokta Paper Packaging Design #5',
    category: 'Lokta Paper',
    subCategory: 'Lokta Paper Packaging',
    badge: 'Lokta',
    image: '/asset/products-studio/lokta-envelope.jpg',
    alt: 'Handmade Lokta Button Document Pouch & Envelope - Eco Print & Pack Nepal'
  },
  {
    id: 14,
    title: 'Lokta Gift Box Design #6',
    category: 'Lokta Paper',
    subCategory: 'Lokta Paper Box',
    badge: 'Lokta',
    image: '/asset/gallery-studio/gallery-14.jpg',
    alt: 'Cobalt Blue Lokta Box Design #6 - Eco Print & Pack Nepal'
  },
  {
    id: 15,
    title: 'Lokta Rigid Luxury Box Design #7',
    category: 'Lokta Paper',
    subCategory: 'Lokta Paper Box',
    badge: 'Lokta',
    image: '/asset/products-studio/lokta-box.jpg',
    alt: 'Handcrafted Rigid Lokta Luxury Box Design #7 - Eco Print & Pack Nepal'
  },
  {
    id: 16,
    title: 'Lokta Paper Bag Design #8',
    category: 'Lokta Paper',
    subCategory: 'Lokta Paper Bag',
    badge: 'Lokta',
    image: '/asset/products-studio/lokta-terracotta.jpg',
    alt: 'Terracotta Artisanal Lokta Paper Bag Design #8 - Eco Print & Pack Nepal'
  },
  {
    id: 19,
    title: 'Brown Kraft Paper Bag Design #1',
    category: 'Kraft & Paper',
    subCategory: 'Brown Kraft Paper Bag',
    badge: 'Kraft Paper',
    image: '/asset/gallery-studio/gallery-20.jpg',
    alt: 'Brown Kraft Paper Bag Design #1 - Eco Print & Pack Nepal'
  },
  {
    id: 20,
    title: 'Brown Kraft Paper Bag Design #2',
    category: 'Kraft & Paper',
    subCategory: 'Brown Kraft Paper Bag',
    badge: 'Kraft Paper',
    image: '/asset/gallery-studio/gallery-19.jpg',
    alt: 'Brown Kraft Paper Bag Design #2 - Eco Print & Pack Nepal'
  },
  {
    id: 21,
    title: 'Brown Kraft Paper Bag Design #3',
    category: 'Kraft & Paper',
    subCategory: 'Brown Kraft Paper Bag',
    badge: 'Kraft Paper',
    image: '/asset/gallery-studio/gallery-21.jpg',
    alt: 'Brown Kraft Paper Bag Design #3 - Eco Print & Pack Nepal'
  },
  {
    id: 22,
    title: 'Brown Kraft Paper Bag Design #4',
    category: 'Kraft & Paper',
    subCategory: 'Brown Kraft Paper Bag',
    badge: 'Kraft Paper',
    image: '/asset/products-studio/kraft-bag.jpg',
    alt: 'Brown Kraft Paper Bag Design #4 - Eco Print & Pack Nepal'
  },
  {
    id: 23,
    title: 'Brown Kraft Paper Bag Design #5',
    category: 'Kraft & Paper',
    subCategory: 'Brown Kraft Paper Bag',
    badge: 'Kraft Paper',
    image: '/asset/gallery-studio/gallery-23.jpg',
    alt: 'Brown Kraft Paper Bag Design #5 - Eco Print & Pack Nepal'
  },
  {
    id: 24,
    title: 'Brown Kraft Paper Bag Design #6',
    category: 'Kraft & Paper',
    subCategory: 'Brown Kraft Paper Bag',
    badge: 'Kraft Paper',
    image: '/asset/gallery-studio/gallery-24.jpg',
    alt: 'Brown Kraft Paper Bag Design #6 - Eco Print & Pack Nepal'
  },
  {
    id: 25,
    title: 'Brown Kraft Paper Bag Design #7',
    category: 'Kraft & Paper',
    subCategory: 'Brown Kraft Paper Bag',
    badge: 'Kraft Paper',
    image: '/asset/gallery-studio/gallery-25.jpg',
    alt: 'Brown Kraft Paper Bag Design #7 - Eco Print & Pack Nepal'
  },
  {
    id: 26,
    title: 'Brown Kraft Paper Bag Design #8',
    category: 'Kraft & Paper',
    subCategory: 'Brown Kraft Paper Bag',
    badge: 'Kraft Paper',
    image: '/asset/gallery-studio/gallery-26.jpg',
    alt: 'Brown Kraft Paper Bag Design #8 - Eco Print & Pack Nepal'
  },
  {
    id: 27,
    title: 'Brown Kraft Paper Bag Design #9',
    category: 'Kraft & Paper',
    subCategory: 'Brown Kraft Paper Bag',
    badge: 'Kraft Paper',
    image: '/asset/gallery-studio/gallery-27.jpg',
    alt: 'Brown Kraft Paper Bag Design #9 - Eco Print & Pack Nepal'
  },
  {
    id: 28,
    title: 'Brown Kraft Paper Bag Design #10',
    category: 'Kraft & Paper',
    subCategory: 'Brown Kraft Paper Bag',
    badge: 'Kraft Paper',
    image: '/asset/gallery-studio/gallery-28.jpg',
    alt: 'Brown Kraft Paper Bag Design #10 - Eco Print & Pack Nepal'
  },
  {
    id: 29,
    title: 'Brown Kraft Paper Bag Design #11',
    category: 'Kraft & Paper',
    subCategory: 'Brown Kraft Paper Bag',
    badge: 'Kraft Paper',
    image: '/asset/gallery-studio/gallery-29.jpg',
    alt: 'Brown Kraft Paper Bag Design #11 - Eco Print & Pack Nepal'
  },
  {
    id: 30,
    title: 'Brown Kraft Paper Bag Design #12',
    category: 'Kraft & Paper',
    subCategory: 'Brown Kraft Paper Bag',
    badge: 'Kraft Paper',
    image: '/asset/gallery-studio/gallery-30.jpg',
    alt: 'Brown Kraft Paper Bag Design #12 - Eco Print & Pack Nepal'
  },
  {
    id: 31,
    title: 'Paper Shopping Bag Design #1',
    category: 'Kraft & Paper',
    subCategory: 'Paper Shopping Bag',
    badge: 'Paper',
    image: '/asset/gallery-studio/gallery-31.jpg',
    alt: 'Paper Shopping Bag Design #1 - Eco Print & Pack Nepal'
  },
  {
    id: 32,
    title: 'Paper Shopping Bag Design #2',
    category: 'Kraft & Paper',
    subCategory: 'Paper Shopping Bag',
    badge: 'Paper',
    image: '/asset/gallery-studio/gallery-32.jpg',
    alt: 'Paper Shopping Bag Design #2 - Eco Print & Pack Nepal'
  },
  {
    id: 33,
    title: 'Paper Shopping Bag Design #3',
    category: 'Kraft & Paper',
    subCategory: 'Paper Shopping Bag',
    badge: 'Paper',
    image: '/asset/gallery-studio/gallery-33.jpg',
    alt: 'Paper Shopping Bag Design #3 - Eco Print & Pack Nepal'
  },
  {
    id: 34,
    title: 'Paper Shopping Bag Design #4',
    category: 'Kraft & Paper',
    subCategory: 'Paper Shopping Bag',
    badge: 'Paper',
    image: '/asset/gallery-studio/gallery-34.jpg',
    alt: 'Paper Shopping Bag Design #4 - Eco Print & Pack Nepal'
  },
  {
    id: 35,
    title: 'Paper Shopping Bag Design #5',
    category: 'Kraft & Paper',
    subCategory: 'Paper Shopping Bag',
    badge: 'Paper',
    image: '/asset/gallery-studio/gallery-35.jpg',
    alt: 'Paper Shopping Bag Design #5 - Eco Print & Pack Nepal'
  },
  {
    id: 36,
    title: 'Paper Shopping Bag Design #6',
    category: 'Kraft & Paper',
    subCategory: 'Paper Shopping Bag',
    badge: 'Paper',
    image: '/asset/gallery-studio/gallery-36.jpg',
    alt: 'Paper Shopping Bag Design #6 - Eco Print & Pack Nepal'
  },
  {
    id: 37,
    title: 'Paper Shopping Bag Design #7',
    category: 'Kraft & Paper',
    subCategory: 'Paper Shopping Bag',
    badge: 'Paper',
    image: '/asset/gallery-studio/gallery-37.jpg',
    alt: 'Paper Shopping Bag Design #7 - Eco Print & Pack Nepal'
  },
  {
    id: 38,
    title: 'Paper Shopping Bag Design #8',
    category: 'Kraft & Paper',
    subCategory: 'Paper Shopping Bag',
    badge: 'Paper',
    image: '/asset/gallery-studio/gallery-38.jpg',
    alt: 'Paper Shopping Bag Design #8 - Eco Print & Pack Nepal'
  },
  {
    id: 39,
    title: 'Paper Shopping Bag Design #9',
    category: 'Kraft & Paper',
    subCategory: 'Paper Shopping Bag',
    badge: 'Paper',
    image: '/asset/gallery-studio/gallery-39.jpg',
    alt: 'Paper Shopping Bag Design #9 - Eco Print & Pack Nepal'
  },
  {
    id: 40,
    title: 'Box Bag Non-Woven Design #1',
    category: 'Non-Woven',
    subCategory: 'Box Bag Non-Woven',
    badge: 'Box Bag',
    image: '/asset/gallery-studio/gallery-40.jpg',
    alt: 'Box Bag Non-Woven Design #1 - Eco Print & Pack Nepal'
  },
  {
    id: 41,
    title: 'Box Bag Non-Woven Design #2',
    category: 'Non-Woven',
    subCategory: 'Box Bag Non-Woven',
    badge: 'Box Bag',
    image: '/asset/gallery-studio/gallery-41.jpg',
    alt: 'Box Bag Non-Woven Design #2 - Eco Print & Pack Nepal'
  },
  {
    id: 42,
    title: 'Box Bag Non-Woven Design #3',
    category: 'Non-Woven',
    subCategory: 'Box Bag Non-Woven',
    badge: 'Box Bag',
    image: '/asset/gallery-studio/gallery-42.jpg',
    alt: 'Box Bag Non-Woven Design #3 - Eco Print & Pack Nepal'
  },
  {
    id: 43,
    title: 'Box Bag Non-Woven Design #4',
    category: 'Non-Woven',
    subCategory: 'Box Bag Non-Woven',
    badge: 'Box Bag',
    image: '/asset/gallery-studio/gallery-43.jpg',
    alt: 'Box Bag Non-Woven Design #4 - Eco Print & Pack Nepal'
  },
  {
    id: 44,
    title: 'Box Bag Non-Woven Design #5',
    category: 'Non-Woven',
    subCategory: 'Box Bag Non-Woven',
    badge: 'Box Bag',
    image: '/asset/gallery-studio/gallery-44.jpg',
    alt: 'Box Bag Non-Woven Design #5 - Eco Print & Pack Nepal'
  },
  {
    id: 45,
    title: 'Box Bag Non-Woven Design #6',
    category: 'Non-Woven',
    subCategory: 'Box Bag Non-Woven',
    badge: 'Box Bag',
    image: '/asset/gallery-studio/gallery-45.jpg',
    alt: 'Box Bag Non-Woven Design #6 - Eco Print & Pack Nepal'
  },
  {
    id: 46,
    title: 'Box Bag Non-Woven Design #7',
    category: 'Non-Woven',
    subCategory: 'Box Bag Non-Woven',
    badge: 'Box Bag',
    image: '/asset/gallery-studio/gallery-46.jpg',
    alt: 'Box Bag Non-Woven Design #7 - Eco Print & Pack Nepal'
  },
  {
    id: 47,
    title: 'D-Cut Bag Non-Woven Design #1',
    category: 'Non-Woven',
    subCategory: 'D-Cut Bag Non-Woven',
    badge: 'D-Cut',
    image: '/asset/gallery-studio/gallery-47.jpg',
    alt: 'D-Cut Bag Non-Woven Design #1 - Eco Print & Pack Nepal'
  },
  {
    id: 48,
    title: 'D-Cut Bag Non-Woven Design #2',
    category: 'Non-Woven',
    subCategory: 'D-Cut Bag Non-Woven',
    badge: 'D-Cut',
    image: '/asset/gallery-studio/gallery-48.jpg',
    alt: 'D-Cut Bag Non-Woven Design #2 - Eco Print & Pack Nepal'
  },
  {
    id: 49,
    title: 'D-Cut Bag Non-Woven Design #3',
    category: 'Non-Woven',
    subCategory: 'D-Cut Bag Non-Woven',
    badge: 'D-Cut',
    image: '/asset/gallery-studio/gallery-49.jpg',
    alt: 'D-Cut Bag Non-Woven Design #3 - Eco Print & Pack Nepal'
  },
  {
    id: 50,
    title: 'D-Cut Bag Non-Woven Design #4',
    category: 'Non-Woven',
    subCategory: 'D-Cut Bag Non-Woven',
    badge: 'D-Cut',
    image: '/asset/gallery-studio/gallery-50.jpg',
    alt: 'D-Cut Bag Non-Woven Design #4 - Eco Print & Pack Nepal'
  },
  {
    id: 51,
    title: 'D-Cut Bag Non-Woven Design #5',
    category: 'Non-Woven',
    subCategory: 'D-Cut Bag Non-Woven',
    badge: 'D-Cut',
    image: '/asset/gallery-studio/gallery-51.jpg',
    alt: 'D-Cut Bag Non-Woven Design #5 - Eco Print & Pack Nepal'
  },
  {
    id: 52,
    title: 'D-Cut Bag Non-Woven Design #6',
    category: 'Non-Woven',
    subCategory: 'D-Cut Bag Non-Woven',
    badge: 'D-Cut',
    image: '/asset/gallery-studio/gallery-52.jpg',
    alt: 'D-Cut Bag Non-Woven Design #6 - Eco Print & Pack Nepal'
  },
  {
    id: 53,
    title: 'W-Cut Bag Non-Woven Design #1',
    category: 'Non-Woven',
    subCategory: 'W-Cut Bag Non-Woven',
    badge: 'W-Cut',
    image: '/asset/gallery-studio/gallery-53.jpg',
    alt: 'W-Cut Bag Non-Woven Design #1 - Eco Print & Pack Nepal'
  },
  {
    id: 54,
    title: 'W-Cut Bag Non-Woven Design #2',
    category: 'Non-Woven',
    subCategory: 'W-Cut Bag Non-Woven',
    badge: 'W-Cut',
    image: '/asset/gallery-studio/gallery-54.jpg',
    alt: 'W-Cut Bag Non-Woven Design #2 - Eco Print & Pack Nepal'
  },
  {
    id: 55,
    title: 'W-Cut Bag Non-Woven Design #3',
    category: 'Non-Woven',
    subCategory: 'W-Cut Bag Non-Woven',
    badge: 'W-Cut',
    image: '/asset/gallery-studio/gallery-55.jpg',
    alt: 'W-Cut Bag Non-Woven Design #3 - Eco Print & Pack Nepal'
  },
  {
    id: 56,
    title: 'W-Cut Bag Non-Woven Design #4',
    category: 'Non-Woven',
    subCategory: 'W-Cut Bag Non-Woven',
    badge: 'W-Cut',
    image: '/asset/gallery-studio/gallery-56.jpg',
    alt: 'W-Cut Bag Non-Woven Design #4 - Eco Print & Pack Nepal'
  },

  {
    id: 59,
    title: 'W-Cut Bag Non-Woven Design #7',
    category: 'Non-Woven',
    subCategory: 'W-Cut Bag Non-Woven',
    badge: 'W-Cut',
    image: '/asset/gallery-studio/gallery-59.jpg',
    alt: 'W-Cut Bag Non-Woven Design #7 - Eco Print & Pack Nepal'
  },
  {
    id: 60,
    title: 'W-Cut Bag Non-Woven Design #8',
    category: 'Non-Woven',
    subCategory: 'W-Cut Bag Non-Woven',
    badge: 'W-Cut',
    image: '/asset/gallery-studio/gallery-60.jpg',
    alt: 'W-Cut Bag Non-Woven Design #8 - Eco Print & Pack Nepal'
  },
  {
    id: 61,
    title: 'Handle Loop Bag Design #1',
    category: 'Non-Woven',
    subCategory: 'Handle Loop Bag',
    badge: 'Loop Handle',
    image: '/asset/gallery-studio/gallery-61.jpg',
    alt: 'Handle Loop Bag Design #1 - Eco Print & Pack Nepal'
  },
  {
    id: 62,
    title: 'Handle Loop Bag Design #2',
    category: 'Non-Woven',
    subCategory: 'Handle Loop Bag',
    badge: 'Loop Handle',
    image: '/asset/gallery-studio/gallery-62.jpg',
    alt: 'Handle Loop Bag Design #2 - Eco Print & Pack Nepal'
  },
  {
    id: 63,
    title: 'Handle Loop Bag Design #3',
    category: 'Non-Woven',
    subCategory: 'Handle Loop Bag',
    badge: 'Loop Handle',
    image: '/asset/gallery-studio/gallery-63.jpg',
    alt: 'Handle Loop Bag Design #3 - Eco Print & Pack Nepal'
  },
  {
    id: 64,
    title: 'Handle Loop Bag Design #4',
    category: 'Non-Woven',
    subCategory: 'Handle Loop Bag',
    badge: 'Loop Handle',
    image: '/asset/gallery-studio/gallery-64.jpg',
    alt: 'Handle Loop Bag Design #4 - Eco Print & Pack Nepal'
  },
  {
    id: 65,
    title: 'Handle Loop Bag Design #5',
    category: 'Non-Woven',
    subCategory: 'Handle Loop Bag',
    badge: 'Loop Handle',
    image: '/asset/gallery-studio/gallery-65.jpg',
    alt: 'Handle Loop Bag Design #5 - Eco Print & Pack Nepal'
  },
  {
    id: 70,
    title: 'Office Showroom & Sample Display Wall',
    category: 'Factory & Showroom',
    subCategory: 'Office Setup',
    badge: 'Showroom Setup',
    image: '/asset/atelier/office-showroom-display-wall.jpg',
    alt: 'Office Showroom & Sample Display Wall - Eco Promotional Industries Lalitpur'
  },
  {
    id: 71,
    title: 'Client Sample Archive & Bag Showcase',
    category: 'Factory & Showroom',
    subCategory: 'Office Setup',
    badge: 'Showroom Setup',
    image: '/asset/atelier/office-showroom-sample-collection.jpg',
    alt: 'Client Sample Archive & Bag Showcase - Eco Promotional Industries Lalitpur'
  },
  {
    id: 72,
    title: 'Artisan Screen Printing Studio in Action',
    category: 'Factory & Showroom',
    subCategory: 'Screen Printing',
    badge: 'Hand Screen Print',
    image: '/asset/atelier/screen-printing-craftsman.jpg',
    alt: 'Artisan Screen Printing Studio in Action - Eco Print & Pack Nepal'
  },
  {
    id: 73,
    title: 'Automated Bag Production & Batching Machine',
    category: 'Factory & Showroom',
    subCategory: 'Production Floor',
    badge: 'Automated Line',
    image: '/asset/atelier/automated-bag-production.jpg',
    alt: 'Automated Bag Production Machine with Red & Green Stacks - Eco Print & Pack Nepal'
  },
  {
    id: 74,
    title: 'Artisan Tailor & Industrial Sewing Station',
    category: 'Factory & Showroom',
    subCategory: 'Stitching & Tailoring',
    badge: 'Precision Sewing',
    image: '/asset/atelier/artisan-sewing-bags.jpg',
    alt: 'Artisan Tailor Sewing Non-Woven Bags - Eco Print & Pack Nepal'
  },
  {
    id: 75,
    title: 'Factory Entrance & Official Company Signboard',
    category: 'Factory & Showroom',
    subCategory: 'Facility Exterior',
    badge: 'Lalitpur Facility',
    image: '/asset/atelier/factory-signboard-exterior.jpg',
    alt: 'Eco Promotional Industries Factory Entrance & Signboard - Lalitpur Metropolitan City Ward 13'
  },
  {
    id: 76,
    title: 'Factory Facility Gate & Industrial Building',
    category: 'Factory & Showroom',
    subCategory: 'Facility Exterior',
    badge: 'Lalitpur Facility',
    image: '/asset/atelier/factory-entrance-gate.jpg',
    alt: 'Factory Entrance Gate - Eco Promotional Industries Lalitpur Ward 13'
  },
  {
    id: 77,
    title: 'Custom Boutique Shopping Bags for Kshitiza',
    category: 'Factory & Showroom',
    subCategory: 'Client Production',
    badge: 'Client Specimen',
    image: '/asset/atelier/custom-printed-bags-kshitiza.jpg',
    alt: 'Custom Printed Non-Woven Boutique Bags for Kshitiza - Eco Print & Pack'
  },
  {
    id: 78,
    title: 'Bag Cutting & Material Preparation Station',
    category: 'Factory & Showroom',
    subCategory: 'Production Floor',
    badge: 'Material Cutting',
    image: '/asset/atelier/factory-cutting-station.jpg',
    alt: 'Bag Cutting & Material Station - Eco Promotional Industries Lalitpur'
  },
  {
    id: 79,
    title: 'Industrial Bag Stitching & Finishing Line',
    category: 'Factory & Showroom',
    subCategory: 'Stitching & Tailoring',
    badge: 'Industrial Stitching',
    image: '/asset/atelier/factory-bag-stitching-line.jpg',
    alt: 'Industrial Bag Stitching Line - Eco Promotional Industries Lalitpur'
  },
];
