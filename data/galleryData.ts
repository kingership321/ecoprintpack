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
    image: '/asset/CanvasToteBag/Canvas%20Tote%20Bag%201.jpg',
    alt: 'Canvas Tote Bag Design #1 - Eco Print & Pack Nepal'
  },
  {
    id: 2,
    title: 'Canvas Tote Bag Design #2',
    category: 'Canvas',
    subCategory: 'Canvas Tote Bag',
    badge: 'Canvas',
    image: '/asset/CanvasToteBag/Canvas%20Tote%20Bag%202.jpg',
    alt: 'Canvas Tote Bag Design #2 - Eco Print & Pack Nepal'
  },
  {
    id: 3,
    title: 'Canvas Tote Bag Design #3',
    category: 'Canvas',
    subCategory: 'Canvas Tote Bag',
    badge: 'Canvas',
    image: '/asset/CanvasToteBag/Canvas%20Tote%20Bag%204.jpg',
    alt: 'Canvas Tote Bag Design #3 - Eco Print & Pack Nepal'
  },
  {
    id: 4,
    title: 'Canvas Tote Bag Design #4',
    category: 'Canvas',
    subCategory: 'Canvas Tote Bag',
    badge: 'Canvas',
    image: '/asset/CanvasToteBag/Canvas%20Tote%20Bag%205.jpg',
    alt: 'Canvas Tote Bag Design #4 - Eco Print & Pack Nepal'
  },
  {
    id: 5,
    title: 'Canvas Tote Bag Design #5',
    category: 'Canvas',
    subCategory: 'Canvas Tote Bag',
    badge: 'Canvas',
    image: '/asset/CanvasToteBag/Canvas%20Tote%20Bag%206.jpg',
    alt: 'Canvas Tote Bag Design #5 - Eco Print & Pack Nepal'
  },
  {
    id: 6,
    title: 'Canvas Tote Bag Design #6',
    category: 'Canvas',
    subCategory: 'Canvas Tote Bag',
    badge: 'Canvas',
    image: '/asset/CanvasToteBag/Canvas%20Tote%20Bag%207.jpg',
    alt: 'Canvas Tote Bag Design #6 - Eco Print & Pack Nepal'
  },
  {
    id: 7,
    title: 'Canvas Tote Bag Design #7',
    category: 'Canvas',
    subCategory: 'Canvas Tote Bag',
    badge: 'Canvas',
    image: '/asset/CanvasToteBag/Canvas%20Tote%20Bag%209.jpg',
    alt: 'Canvas Tote Bag Design #7 - Eco Print & Pack Nepal'
  },
  {
    id: 8,
    title: 'Canvas Tote Bag Design #8',
    category: 'Canvas',
    subCategory: 'Canvas Tote Bag',
    badge: 'Canvas',
    image: '/asset/CanvasToteBag/CanvasToteBag3.jpg',
    alt: 'Canvas Tote Bag Design #8 - Eco Print & Pack Nepal'
  },
  {
    id: 9,
    title: 'Lokta Paper Bag Design #1',
    category: 'Lokta Paper',
    subCategory: 'Lokta Paper Bag',
    badge: 'Lokta',
    image: '/asset/LoktaPaperProducts/Add%20a%20touch%20of%20green%20to%20your%20bags%20with%20our%20plantable%20seed%20paper%20tags!.%20%F0%9F%8C%BC%E2%9C%A8%20%E2%9E%BC%20%E2%9E%BC%20%E2%9E%BC%20%E2%9E%BC%20%E2%9E%BC%20%23SustainableLiving%20%23EcoChic%20%23LittleGreenPaperShop%20%23smallbusiness%20%23seedpaper%20%23papertags%20%23giftbagtags%20%23sustainable%20%23giftideas%20%23customise.jpg',
    alt: 'Lokta Paper Bag Design #1 - Eco Print & Pack Nepal'
  },
  {
    id: 10,
    title: 'Lokta Paper Bag Design #2',
    category: 'Lokta Paper',
    subCategory: 'Lokta Paper Bag',
    badge: 'Lokta',
    image: '/asset/LoktaPaperProducts/Nepali%20Lokta%20Products%201.jpg',
    alt: 'Lokta Paper Bag Design #2 - Eco Print & Pack Nepal'
  },
  {
    id: 11,
    title: 'Lokta Paper Bag Design #3',
    category: 'Lokta Paper',
    subCategory: 'Lokta Paper Bag',
    badge: 'Lokta',
    image: '/asset/LoktaPaperProducts/Nepali%20Lokta%20Products%203.jpg',
    alt: 'Lokta Paper Bag Design #3 - Eco Print & Pack Nepal'
  },
  {
    id: 12,
    title: 'Lokta Paper Bag Design #4',
    category: 'Lokta Paper',
    subCategory: 'Lokta Paper Bag',
    badge: 'Lokta',
    image: '/asset/LoktaPaperProducts/Nepali%20Lokta%20Products%204.jpg',
    alt: 'Lokta Paper Bag Design #4 - Eco Print & Pack Nepal'
  },
  {
    id: 13,
    title: 'Lokta Paper Bag Design #5',
    category: 'Lokta Paper',
    subCategory: 'Lokta Paper Bag',
    badge: 'Lokta',
    image: '/asset/LoktaPaperProducts/Nepali%20Lokta%20Products%205.jpg',
    alt: 'Lokta Paper Bag Design #5 - Eco Print & Pack Nepal'
  },
  {
    id: 14,
    title: 'Lokta Paper Bag Design #6',
    category: 'Lokta Paper',
    subCategory: 'Lokta Paper Bag',
    badge: 'Lokta',
    image: '/asset/LoktaPaperProducts/Nepali%20Lokta%20Products%206.jpg',
    alt: 'Lokta Paper Bag Design #6 - Eco Print & Pack Nepal'
  },
  {
    id: 15,
    title: 'Lokta Paper Bag Design #7',
    category: 'Lokta Paper',
    subCategory: 'Lokta Paper Bag',
    badge: 'Lokta',
    image: '/asset/LoktaPaperProducts/Nepali%20Lokta%20Products%207.jpg',
    alt: 'Lokta Paper Bag Design #7 - Eco Print & Pack Nepal'
  },
  {
    id: 16,
    title: 'Lokta Paper Bag Design #8',
    category: 'Lokta Paper',
    subCategory: 'Lokta Paper Bag',
    badge: 'Lokta',
    image: '/asset/LoktaPaperProducts/Nepali%20Lokta%20Products%208.jpg',
    alt: 'Lokta Paper Bag Design #8 - Eco Print & Pack Nepal'
  },
  {
    id: 17,
    title: 'Lokta Paper Bag Design #9',
    category: 'Lokta Paper',
    subCategory: 'Lokta Paper Bag',
    badge: 'Lokta',
    image: '/asset/LoktaPaperProducts/NepaliLoktaProducts2.jpg',
    alt: 'Lokta Paper Bag Design #9 - Eco Print & Pack Nepal'
  },
  {
    id: 18,
    title: 'Lokta Paper Bag Design #10',
    category: 'Lokta Paper',
    subCategory: 'Lokta Paper Bag',
    badge: 'Lokta',
    image: '/asset/LoktaPaperProducts/NepaliLoktaProducts9.jpg',
    alt: 'Lokta Paper Bag Design #10 - Eco Print & Pack Nepal'
  },
  {
    id: 19,
    title: 'Brown Kraft Paper Bag Design #1',
    category: 'Kraft & Paper',
    subCategory: 'Brown Kraft Paper Bag',
    badge: 'Kraft Paper',
    image: '/asset/BrownPaperKraftBagPhoto/Brown%20Kraft%20Paper%20Bag%201.jpg',
    alt: 'Brown Kraft Paper Bag Design #1 - Eco Print & Pack Nepal'
  },
  {
    id: 20,
    title: 'Brown Kraft Paper Bag Design #2',
    category: 'Kraft & Paper',
    subCategory: 'Brown Kraft Paper Bag',
    badge: 'Kraft Paper',
    image: '/asset/BrownPaperKraftBagPhoto/Brown%20Kraft%20Paper%20Bag%2010.jpg',
    alt: 'Brown Kraft Paper Bag Design #2 - Eco Print & Pack Nepal'
  },
  {
    id: 21,
    title: 'Brown Kraft Paper Bag Design #3',
    category: 'Kraft & Paper',
    subCategory: 'Brown Kraft Paper Bag',
    badge: 'Kraft Paper',
    image: '/asset/BrownPaperKraftBagPhoto/Brown%20Kraft%20Paper%20Bag%2011.jpg',
    alt: 'Brown Kraft Paper Bag Design #3 - Eco Print & Pack Nepal'
  },
  {
    id: 22,
    title: 'Brown Kraft Paper Bag Design #4',
    category: 'Kraft & Paper',
    subCategory: 'Brown Kraft Paper Bag',
    badge: 'Kraft Paper',
    image: '/asset/BrownPaperKraftBagPhoto/Brown%20Kraft%20Paper%20Bag%2012.jpg',
    alt: 'Brown Kraft Paper Bag Design #4 - Eco Print & Pack Nepal'
  },
  {
    id: 23,
    title: 'Brown Kraft Paper Bag Design #5',
    category: 'Kraft & Paper',
    subCategory: 'Brown Kraft Paper Bag',
    badge: 'Kraft Paper',
    image: '/asset/BrownPaperKraftBagPhoto/Brown%20Kraft%20Paper%20Bag%203.jpg',
    alt: 'Brown Kraft Paper Bag Design #5 - Eco Print & Pack Nepal'
  },
  {
    id: 24,
    title: 'Brown Kraft Paper Bag Design #6',
    category: 'Kraft & Paper',
    subCategory: 'Brown Kraft Paper Bag',
    badge: 'Kraft Paper',
    image: '/asset/BrownPaperKraftBagPhoto/Brown%20Kraft%20Paper%20Bag%204.jpg',
    alt: 'Brown Kraft Paper Bag Design #6 - Eco Print & Pack Nepal'
  },
  {
    id: 25,
    title: 'Brown Kraft Paper Bag Design #7',
    category: 'Kraft & Paper',
    subCategory: 'Brown Kraft Paper Bag',
    badge: 'Kraft Paper',
    image: '/asset/BrownPaperKraftBagPhoto/Brown%20Kraft%20Paper%20Bag%205.jpg',
    alt: 'Brown Kraft Paper Bag Design #7 - Eco Print & Pack Nepal'
  },
  {
    id: 26,
    title: 'Brown Kraft Paper Bag Design #8',
    category: 'Kraft & Paper',
    subCategory: 'Brown Kraft Paper Bag',
    badge: 'Kraft Paper',
    image: '/asset/BrownPaperKraftBagPhoto/Brown%20Kraft%20Paper%20Bag%207.jpg',
    alt: 'Brown Kraft Paper Bag Design #8 - Eco Print & Pack Nepal'
  },
  {
    id: 27,
    title: 'Brown Kraft Paper Bag Design #9',
    category: 'Kraft & Paper',
    subCategory: 'Brown Kraft Paper Bag',
    badge: 'Kraft Paper',
    image: '/asset/BrownPaperKraftBagPhoto/Brown%20Kraft%20Paper%20Bag%208.jpg',
    alt: 'Brown Kraft Paper Bag Design #9 - Eco Print & Pack Nepal'
  },
  {
    id: 28,
    title: 'Brown Kraft Paper Bag Design #10',
    category: 'Kraft & Paper',
    subCategory: 'Brown Kraft Paper Bag',
    badge: 'Kraft Paper',
    image: '/asset/BrownPaperKraftBagPhoto/Brown%20Kraft%20Paper%20Bag%209.jpg',
    alt: 'Brown Kraft Paper Bag Design #10 - Eco Print & Pack Nepal'
  },
  {
    id: 29,
    title: 'Brown Kraft Paper Bag Design #11',
    category: 'Kraft & Paper',
    subCategory: 'Brown Kraft Paper Bag',
    badge: 'Kraft Paper',
    image: '/asset/BrownPaperKraftBagPhoto/BrownKraftPaperBag2.jpg',
    alt: 'Brown Kraft Paper Bag Design #11 - Eco Print & Pack Nepal'
  },
  {
    id: 30,
    title: 'Brown Kraft Paper Bag Design #12',
    category: 'Kraft & Paper',
    subCategory: 'Brown Kraft Paper Bag',
    badge: 'Kraft Paper',
    image: '/asset/BrownPaperKraftBagPhoto/BrownKraftPaperBag6.jpg',
    alt: 'Brown Kraft Paper Bag Design #12 - Eco Print & Pack Nepal'
  },
  {
    id: 31,
    title: 'Paper Shopping Bag Design #1',
    category: 'Kraft & Paper',
    subCategory: 'Paper Shopping Bag',
    badge: 'Paper',
    image: '/asset/PaperBag/Paper%20Bag%201.jpg',
    alt: 'Paper Shopping Bag Design #1 - Eco Print & Pack Nepal'
  },
  {
    id: 32,
    title: 'Paper Shopping Bag Design #2',
    category: 'Kraft & Paper',
    subCategory: 'Paper Shopping Bag',
    badge: 'Paper',
    image: '/asset/PaperBag/Paper%20Bag%202.jpg',
    alt: 'Paper Shopping Bag Design #2 - Eco Print & Pack Nepal'
  },
  {
    id: 33,
    title: 'Paper Shopping Bag Design #3',
    category: 'Kraft & Paper',
    subCategory: 'Paper Shopping Bag',
    badge: 'Paper',
    image: '/asset/PaperBag/Paper%20Bag%204.jpg',
    alt: 'Paper Shopping Bag Design #3 - Eco Print & Pack Nepal'
  },
  {
    id: 34,
    title: 'Paper Shopping Bag Design #4',
    category: 'Kraft & Paper',
    subCategory: 'Paper Shopping Bag',
    badge: 'Paper',
    image: '/asset/PaperBag/Paper%20Bag%205.jpg',
    alt: 'Paper Shopping Bag Design #4 - Eco Print & Pack Nepal'
  },
  {
    id: 35,
    title: 'Paper Shopping Bag Design #5',
    category: 'Kraft & Paper',
    subCategory: 'Paper Shopping Bag',
    badge: 'Paper',
    image: '/asset/PaperBag/Paper%20Bag%206.jpg',
    alt: 'Paper Shopping Bag Design #5 - Eco Print & Pack Nepal'
  },
  {
    id: 36,
    title: 'Paper Shopping Bag Design #6',
    category: 'Kraft & Paper',
    subCategory: 'Paper Shopping Bag',
    badge: 'Paper',
    image: '/asset/PaperBag/Paper%20Bag%207.jpg',
    alt: 'Paper Shopping Bag Design #6 - Eco Print & Pack Nepal'
  },
  {
    id: 37,
    title: 'Paper Shopping Bag Design #7',
    category: 'Kraft & Paper',
    subCategory: 'Paper Shopping Bag',
    badge: 'Paper',
    image: '/asset/PaperBag/Paper%20Bag%208.jpg',
    alt: 'Paper Shopping Bag Design #7 - Eco Print & Pack Nepal'
  },
  {
    id: 38,
    title: 'Paper Shopping Bag Design #8',
    category: 'Kraft & Paper',
    subCategory: 'Paper Shopping Bag',
    badge: 'Paper',
    image: '/asset/PaperBag/Paper%20Bag%209.jpg',
    alt: 'Paper Shopping Bag Design #8 - Eco Print & Pack Nepal'
  },
  {
    id: 39,
    title: 'Paper Shopping Bag Design #9',
    category: 'Kraft & Paper',
    subCategory: 'Paper Shopping Bag',
    badge: 'Paper',
    image: '/asset/PaperBag/PaperBag3.jpg',
    alt: 'Paper Shopping Bag Design #9 - Eco Print & Pack Nepal'
  },
  {
    id: 40,
    title: 'Box Bag Non-Woven Design #1',
    category: 'Non-Woven',
    subCategory: 'Box Bag Non-Woven',
    badge: 'Box Bag',
    image: '/asset/NonWovenFabricBoxBag/Box%20Bag%20Non%20woven%20Fabric%201.jpg',
    alt: 'Box Bag Non-Woven Design #1 - Eco Print & Pack Nepal'
  },
  {
    id: 41,
    title: 'Box Bag Non-Woven Design #2',
    category: 'Non-Woven',
    subCategory: 'Box Bag Non-Woven',
    badge: 'Box Bag',
    image: '/asset/NonWovenFabricBoxBag/Box%20Bag%20Non%20woven%20Fabric%202.jpg',
    alt: 'Box Bag Non-Woven Design #2 - Eco Print & Pack Nepal'
  },
  {
    id: 42,
    title: 'Box Bag Non-Woven Design #3',
    category: 'Non-Woven',
    subCategory: 'Box Bag Non-Woven',
    badge: 'Box Bag',
    image: '/asset/NonWovenFabricBoxBag/Box%20Bag%20Non%20woven%20Fabric%203.jpg',
    alt: 'Box Bag Non-Woven Design #3 - Eco Print & Pack Nepal'
  },
  {
    id: 43,
    title: 'Box Bag Non-Woven Design #4',
    category: 'Non-Woven',
    subCategory: 'Box Bag Non-Woven',
    badge: 'Box Bag',
    image: '/asset/NonWovenFabricBoxBag/Box%20Bag%20Non%20woven%20Fabric%205.jpg',
    alt: 'Box Bag Non-Woven Design #4 - Eco Print & Pack Nepal'
  },
  {
    id: 44,
    title: 'Box Bag Non-Woven Design #5',
    category: 'Non-Woven',
    subCategory: 'Box Bag Non-Woven',
    badge: 'Box Bag',
    image: '/asset/NonWovenFabricBoxBag/Box%20Bag%20Non%20woven%20Fabric%206.jpg',
    alt: 'Box Bag Non-Woven Design #5 - Eco Print & Pack Nepal'
  },
  {
    id: 45,
    title: 'Box Bag Non-Woven Design #6',
    category: 'Non-Woven',
    subCategory: 'Box Bag Non-Woven',
    badge: 'Box Bag',
    image: '/asset/NonWovenFabricBoxBag/Box%20Bag%20Non%20woven%20Fabric%207.jpg',
    alt: 'Box Bag Non-Woven Design #6 - Eco Print & Pack Nepal'
  },
  {
    id: 46,
    title: 'Box Bag Non-Woven Design #7',
    category: 'Non-Woven',
    subCategory: 'Box Bag Non-Woven',
    badge: 'Box Bag',
    image: '/asset/NonWovenFabricBoxBag/BoxBagNonwovenFabric4.jpg',
    alt: 'Box Bag Non-Woven Design #7 - Eco Print & Pack Nepal'
  },
  {
    id: 47,
    title: 'D-Cut Bag Non-Woven Design #1',
    category: 'Non-Woven',
    subCategory: 'D-Cut Bag Non-Woven',
    badge: 'D-Cut',
    image: '/asset/NonWovenFabricDcut/D%20cut%20Bag%201.jpg',
    alt: 'D-Cut Bag Non-Woven Design #1 - Eco Print & Pack Nepal'
  },
  {
    id: 48,
    title: 'D-Cut Bag Non-Woven Design #2',
    category: 'Non-Woven',
    subCategory: 'D-Cut Bag Non-Woven',
    badge: 'D-Cut',
    image: '/asset/NonWovenFabricDcut/D%20cut%20Bag%202.jpg',
    alt: 'D-Cut Bag Non-Woven Design #2 - Eco Print & Pack Nepal'
  },
  {
    id: 49,
    title: 'D-Cut Bag Non-Woven Design #3',
    category: 'Non-Woven',
    subCategory: 'D-Cut Bag Non-Woven',
    badge: 'D-Cut',
    image: '/asset/NonWovenFabricDcut/D%20cut%20Bag%204.jpg',
    alt: 'D-Cut Bag Non-Woven Design #3 - Eco Print & Pack Nepal'
  },
  {
    id: 50,
    title: 'D-Cut Bag Non-Woven Design #4',
    category: 'Non-Woven',
    subCategory: 'D-Cut Bag Non-Woven',
    badge: 'D-Cut',
    image: '/asset/NonWovenFabricDcut/D%20cut%20Bag%205.jpg',
    alt: 'D-Cut Bag Non-Woven Design #4 - Eco Print & Pack Nepal'
  },
  {
    id: 51,
    title: 'D-Cut Bag Non-Woven Design #5',
    category: 'Non-Woven',
    subCategory: 'D-Cut Bag Non-Woven',
    badge: 'D-Cut',
    image: '/asset/NonWovenFabricDcut/D%20cut%20Bag%206.jpg',
    alt: 'D-Cut Bag Non-Woven Design #5 - Eco Print & Pack Nepal'
  },
  {
    id: 52,
    title: 'D-Cut Bag Non-Woven Design #6',
    category: 'Non-Woven',
    subCategory: 'D-Cut Bag Non-Woven',
    badge: 'D-Cut',
    image: '/asset/NonWovenFabricDcut/DcutBag3.jpg',
    alt: 'D-Cut Bag Non-Woven Design #6 - Eco Print & Pack Nepal'
  },
  {
    id: 53,
    title: 'W-Cut Bag Non-Woven Design #1',
    category: 'Non-Woven',
    subCategory: 'W-Cut Bag Non-Woven',
    badge: 'W-Cut',
    image: '/asset/NonWovenFabricWcutBag/W%20Cut%20Bag%20Non%20Woven%20Fabric%201.jpg',
    alt: 'W-Cut Bag Non-Woven Design #1 - Eco Print & Pack Nepal'
  },
  {
    id: 54,
    title: 'W-Cut Bag Non-Woven Design #2',
    category: 'Non-Woven',
    subCategory: 'W-Cut Bag Non-Woven',
    badge: 'W-Cut',
    image: '/asset/NonWovenFabricWcutBag/W%20Cut%20Bag%20Non%20Woven%20Fabric%203.jpg',
    alt: 'W-Cut Bag Non-Woven Design #2 - Eco Print & Pack Nepal'
  },
  {
    id: 55,
    title: 'W-Cut Bag Non-Woven Design #3',
    category: 'Non-Woven',
    subCategory: 'W-Cut Bag Non-Woven',
    badge: 'W-Cut',
    image: '/asset/NonWovenFabricWcutBag/W%20Cut%20Bag%20Non%20Woven%20Fabric%204.jpg',
    alt: 'W-Cut Bag Non-Woven Design #3 - Eco Print & Pack Nepal'
  },
  {
    id: 56,
    title: 'W-Cut Bag Non-Woven Design #4',
    category: 'Non-Woven',
    subCategory: 'W-Cut Bag Non-Woven',
    badge: 'W-Cut',
    image: '/asset/NonWovenFabricWcutBag/W%20Cut%20Bag%20Non%20Woven%20Fabric%205.jpg',
    alt: 'W-Cut Bag Non-Woven Design #4 - Eco Print & Pack Nepal'
  },
  {
    id: 57,
    title: 'W-Cut Bag Non-Woven Design #5',
    category: 'Non-Woven',
    subCategory: 'W-Cut Bag Non-Woven',
    badge: 'W-Cut',
    image: '/asset/NonWovenFabricWcutBag/W%20Cut%20Bag%20Non%20Woven%20Fabric%206.jpg',
    alt: 'W-Cut Bag Non-Woven Design #5 - Eco Print & Pack Nepal'
  },
  {
    id: 58,
    title: 'W-Cut Bag Non-Woven Design #6',
    category: 'Non-Woven',
    subCategory: 'W-Cut Bag Non-Woven',
    badge: 'W-Cut',
    image: '/asset/NonWovenFabricWcutBag/W%20Cut%20Bag%20Non%20Woven%20Fabric%207.jpg',
    alt: 'W-Cut Bag Non-Woven Design #6 - Eco Print & Pack Nepal'
  },
  {
    id: 59,
    title: 'W-Cut Bag Non-Woven Design #7',
    category: 'Non-Woven',
    subCategory: 'W-Cut Bag Non-Woven',
    badge: 'W-Cut',
    image: '/asset/NonWovenFabricWcutBag/W%20Cut%20Bag%20Non%20Woven%20Fabric%208.jpg',
    alt: 'W-Cut Bag Non-Woven Design #7 - Eco Print & Pack Nepal'
  },
  {
    id: 60,
    title: 'W-Cut Bag Non-Woven Design #8',
    category: 'Non-Woven',
    subCategory: 'W-Cut Bag Non-Woven',
    badge: 'W-Cut',
    image: '/asset/NonWovenFabricWcutBag/wcut2.jpg',
    alt: 'W-Cut Bag Non-Woven Design #8 - Eco Print & Pack Nepal'
  },
  {
    id: 61,
    title: 'Handle Loop Bag Design #1',
    category: 'Non-Woven',
    subCategory: 'Handle Loop Bag',
    badge: 'Loop Handle',
    image: '/asset/HandleLoopNonWovenBag/Handle%20Loop%20Bag%201.jpg',
    alt: 'Handle Loop Bag Design #1 - Eco Print & Pack Nepal'
  },
  {
    id: 62,
    title: 'Handle Loop Bag Design #2',
    category: 'Non-Woven',
    subCategory: 'Handle Loop Bag',
    badge: 'Loop Handle',
    image: '/asset/HandleLoopNonWovenBag/Handle%20Loop%20Bag%202.jpg',
    alt: 'Handle Loop Bag Design #2 - Eco Print & Pack Nepal'
  },
  {
    id: 63,
    title: 'Handle Loop Bag Design #3',
    category: 'Non-Woven',
    subCategory: 'Handle Loop Bag',
    badge: 'Loop Handle',
    image: '/asset/HandleLoopNonWovenBag/Handle%20Loop%20Bag%203.jpg',
    alt: 'Handle Loop Bag Design #3 - Eco Print & Pack Nepal'
  },
  {
    id: 64,
    title: 'Handle Loop Bag Design #4',
    category: 'Non-Woven',
    subCategory: 'Handle Loop Bag',
    badge: 'Loop Handle',
    image: '/asset/HandleLoopNonWovenBag/Handle%20Loop%20Bag%205.jpg',
    alt: 'Handle Loop Bag Design #4 - Eco Print & Pack Nepal'
  },
  {
    id: 65,
    title: 'Handle Loop Bag Design #5',
    category: 'Non-Woven',
    subCategory: 'Handle Loop Bag',
    badge: 'Loop Handle',
    image: '/asset/HandleLoopNonWovenBag/HandleLoopBag4.jpg',
    alt: 'Handle Loop Bag Design #5 - Eco Print & Pack Nepal'
  },
];
