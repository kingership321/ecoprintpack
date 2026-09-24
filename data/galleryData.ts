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

export const galleryCategories = ['All', 'Non-Woven', 'Canvas', 'Lokta Paper', 'Kraft & Paper'] as const;

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
    image: '/asset/gallery-studio/gallery-9.jpg',
    alt: 'Lokta Paper Bag Design #3 - Eco Print & Pack Nepal'
  },
  {
    id: 12,
    title: 'Lokta Paper Bag Design #4',
    category: 'Lokta Paper',
    subCategory: 'Lokta Paper Bag',
    badge: 'Lokta',
    image: '/asset/gallery-studio/gallery-12.jpg',
    alt: 'Lokta Paper Bag Design #4 - Eco Print & Pack Nepal'
  },
  {
    id: 13,
    title: 'Lokta Paper Bag Design #5',
    category: 'Lokta Paper',
    subCategory: 'Lokta Paper Bag',
    badge: 'Lokta',
    image: '/asset/gallery-studio/gallery-10.jpg',
    alt: 'Lokta Paper Bag Design #5 - Eco Print & Pack Nepal'
  },
  {
    id: 14,
    title: 'Lokta Paper Bag Design #6',
    category: 'Lokta Paper',
    subCategory: 'Lokta Paper Bag',
    badge: 'Lokta',
    image: '/asset/gallery-studio/gallery-14.jpg',
    alt: 'Lokta Paper Bag Design #6 - Eco Print & Pack Nepal'
  },
  {
    id: 15,
    title: 'Lokta Paper Bag Design #7',
    category: 'Lokta Paper',
    subCategory: 'Lokta Paper Bag',
    badge: 'Lokta',
    image: '/asset/gallery-studio/gallery-15.jpg',
    alt: 'Lokta Paper Bag Design #7 - Eco Print & Pack Nepal'
  },
  {
    id: 16,
    title: 'Lokta Paper Bag Design #8',
    category: 'Lokta Paper',
    subCategory: 'Lokta Paper Bag',
    badge: 'Lokta',
    image: '/asset/gallery-studio/gallery-16.jpg',
    alt: 'Lokta Paper Bag Design #8 - Eco Print & Pack Nepal'
  },
  {
    id: 17,
    title: 'Lokta Paper Bag Design #9',
    category: 'Lokta Paper',
    subCategory: 'Lokta Paper Bag',
    badge: 'Lokta',
    image: '/asset/gallery-studio/gallery-17.jpg',
    alt: 'Lokta Paper Bag Design #9 - Eco Print & Pack Nepal'
  },
  {
    id: 18,
    title: 'Lokta Paper Bag Design #10',
    category: 'Lokta Paper',
    subCategory: 'Lokta Paper Bag',
    badge: 'Lokta',
    image: '/asset/gallery-studio/gallery-18.jpg',
    alt: 'Lokta Paper Bag Design #10 - Eco Print & Pack Nepal'
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
    id: 57,
    title: 'W-Cut Bag Non-Woven Design #5',
    category: 'Non-Woven',
    subCategory: 'W-Cut Bag Non-Woven',
    badge: 'W-Cut',
    image: '/asset/gallery-studio/gallery-57.jpg',
    alt: 'W-Cut Bag Non-Woven Design #5 - Eco Print & Pack Nepal'
  },
  {
    id: 58,
    title: 'W-Cut Bag Non-Woven Design #6',
    category: 'Non-Woven',
    subCategory: 'W-Cut Bag Non-Woven',
    badge: 'W-Cut',
    image: '/asset/gallery-studio/gallery-58.jpg',
    alt: 'W-Cut Bag Non-Woven Design #6 - Eco Print & Pack Nepal'
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
];
