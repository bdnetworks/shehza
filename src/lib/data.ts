import type { Project, ProjectCategory, Testimonial } from './types';
import { LayoutDashboard, Code, BarChart3, Palette, Camera, Mic2, Newspaper, ShoppingCart } from 'lucide-react';

export const projectCategories: ProjectCategory[] = [
  { name: 'ব্লগার থিম', icon: BarChart3 },
  { name: 'ই-কমার্স', icon: ShoppingCart },
  { name: 'নিউজ সাইট', icon: Newspaper },
  { name: 'রিয়্যাক্ট প্রজেক্ট', icon: Code },
  { name: 'অনলাইন কোর্স', icon: LayoutDashboard },
  { name: 'UI/UX ডিজাইন', icon: Palette },
  { name: 'স্কুল/কলেজ প্রোজেক্ট', icon: BarChart3 },
  { name: 'অনলাইন রেডিও', icon: LayoutDashboard },
  { name: 'অনলাইন টিভি', icon: LayoutDashboard },
];

export const allProjects: Project[] = [
  {
    id: 1,
    title: 'মডার্ন ই-কমার্স থিম',
    description: 'ব্লগারের জন্য একটি আকর্ষণীয় এবং দ্রুতগতির ই-কমার্স থিম। সহজেই কাস্টমাইজ করা যায়। ',
    category: 'ব্লগার থিম',
    price: 15,
<<<<<<< HEAD
    imageUrl: 'https://i.ytimg.com/vi/GCFUimxNa_w/maxresdefault.jpg',
    demoUrl: 'https://banglashop100.blogspot.com/',
=======
    imageUrl: 'https://i.ytimg.com/vi/GCFUimxNa_w/maxresdefault.jpg',
    demoUrl: 'https://banglashop100.blogspot.com',
>>>>>>> 7850d0297b49b973d4c244263a411e4dd54ea076
    isFeatured: true,
  },
  {
    id: 2,
    title: 'বাংলা নিউজ পোর্টাল',
    description: 'ব্লগার দিয়ে তৈরি একটি সম্পূর্ণ ডাইনামিক নিউজ পোর্টাল। দ্রুত এবং SEO-ফ্রেন্ডলি। খুব সহজেই আপনি এই থিমটি কাস্টমাইজেশন করতে পারবেন, যেহেতু এখানে কোন কোডিং করার ঝামেলা নেই তাই যে কেউ এটি কাস্টমাইজেশন সম্পূর্ণ করতে পারবেন।',
    category: 'ব্লগার থিম',
    price: 20,
    imageUrl: 'https://sacreativem.com.bd/wp-content/uploads/2025/05/prothomalo.jpg',
    demoUrl: 'https://www.purbakantho.com/',
    isFeatured: true,
  },
  {
    id: 3,
    title: 'নেক্সট.জেএস কোর্স প্ল্যাটফর্ম',
    description: 'নেক্সট.জেএস দিয়ে তৈরি আধুনিক অনলাইন কোর্স প্ল্যাটফর্ম। সার্ভার সাইড রেন্ডারিং এবং স্ট্যাটিক সাইট জেনারেশনের সুবিধা।',
    category: 'অনলাইন কোর্স',
    price: 20,
    imageUrl: 'https://cdn.pixabay.com/photo/2017/05/31/16/39/windows-2360920_1280.png',
    demoUrl: 'https://ronginbari.onrender.com/',
    isFeatured: true,
  },
  {
    id: 4,
    title: 'শপিফাই অল্টারনেটিভ ই-কমার্স',
    description: 'ছোট ব্যবসার জন্য একটি সাশ্রয়ী মূল্যের এবং শক্তিশালী ই-কমার্স সমাধান।',
    category: 'ই-কমার্স',
    price: 30,
    imageUrl: 'https://skill-shikhun.netlify.app/static/media/GD.61c5d4c733e05ef17588.png',
    demoUrl: '#',
    isFeatured: true,
  },
  {
    id: 5,
    title: 'ভাইরাল নিউজ ওয়েবসাইট থিম',
    description: 'ব্লগারের জন্য ডিজাইন করা একটি আকর্ষণীয় নিউজ থিম, যা সোশ্যাল মিডিয়ায় সহজে ভাইরাল হতে সাহায্য করে।',
    category: 'নিউজ সাইট',
    price: 20,
    imageUrl: 'https://byucougars.com/imgproxy/lDmtAaXOdeYxXdIy9TXlwNGYVy7gLk6FcxV7n2IKus0/rs:fit:1980:0:0/g:ce/q:90/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL2J5dWNvdWdhcnMtcHJvZC8yMDI0LzA4LzI2L1pSTW1LNXM2Q0d5dVFRYnJNSk54NWhUWkdMUTduSXFZN1B6blhWMm0uanBn.jpg',
    demoUrl: 'https://bd-news9.blogspot.com/',
    isFeatured: false,
  },
  {
    id: 6,
    title: 'পোর্টফোলিও ওয়েবসাইট টেমপ্লেট',
    description: 'ডেভেলপার এবং ডিজাইনারদের জন্য একটি মিনিমাল এবং আধুনিক পোর্টফোলিও টেমপ্লেট।',
    category: 'রিয়্যাক্ট প্রজেক্ট',
    price: 15,
    imageUrl: 'https://skill-shikhun.netlify.app/static/media/WD.3c2e0df1e4412a1f69a5.png',
    demoUrl: '#',
    isFeatured: false,
  },
  {
    id: 7,
    title: 'রেস্টুরেন্ট ওয়েবসাইট UI কিট',
    description: 'ফিফমা দিয়ে ডিজাইন করা রেস্টুরেন্টের জন্য একটি পূর্ণাঙ্গ UI কিট।',
    category: 'UI/UX ডিজাইন',
    price: 30,
    imageUrl: 'https://static.vecteezy.com/system/resources/previews/023/322/547/non_2x/restaurant-menu-app-ui-gui-screen-including-login-booking-table-for-advertising-vector.jpg',
    demoUrl: '#',
    isFeatured: false,
  },
  {
    id: 8,
    title: 'লাইভ রেডিও ব্লগার থিম',
    description: 'লাইভ রেডিও স্টেশন কিংবা মিউজিক্যাল রিলেটেড সাইটর তৈরী করার একটি বিশেষ ব্লগার থিম।',
    category: 'ব্লগার থিম',
    price: 15,
    imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhHLiHabTWCqO18zjCTDnF56fTTrnTTXj8cUM66hJwTh-3LPw1qBj0QhBpm92JVghJPnBI6bEdGQ69LK1ROT97L8xPUuZJjnfjyXTGXQrY_jnMSxHZJDAQhSI4eXf_UZ09gdBk6eda7R6UUGsjoFIE75dxD5zQ1wnF6oPdilOmlgQhJQCKEk39WZSSu/w640-h360/radiosakib%20copy.png',
    demoUrl: 'https://radiosakib.blogspot.com/',
    isFeatured: false,
  }
];

export const featuredProjects = allProjects.filter(project => project.isFeatured);

export const testimonials: Testimonial[] = [
  {
    name: 'আকাশ আহমেদ',
    title: 'ক্লায়েন্ট',
    quote: 'আমি ই-কমার্স থিমটি কিনেছি এবং এটি আমার ব্যবসার জন্য অসাধারণ কাজ করছে। খুব সহজেই সবকিছু সেটআপ করতে পেরেছি।',
    avatar: 'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-sulimansallehi-1704488.jpg&fm=jpg',
  },
  {
    name: 'সুমন বড়ুয়া',
    title: 'ব্লগার',
    quote: 'নিউজ সাইট থিমটি আমার ব্লগের চেহারা পুরোপুরি বদলে দিয়েছে। পাঠকরা এখন আরও বেশি সময় ধরে সাইটে থাকছেন।',
    avatar: 'https://i.pinimg.com/564x/31/44/7e/31447e25b7bc3429f83520350ed13c15.jpg',
  },
  {
    name: 'ফারিয়া জামান',
    title: 'ফ্রিল্যান্সার',
    quote: 'রিয়্যাক্ট পোর্টফোলিও টেমপ্লেটটি ব্যবহার করে আমি ক্লায়েন্টদের কাছ থেকে অনেক ভালো সাড়া পাচ্ছি। ডিজাইনটা খুবই প্রফেশনাল।',
    avatar: 'https://i.pinimg.com/736x/db/53/8b/db538b5c71fd796b5be5b138ca1a0f06.jpg',
  },
    {
    name: 'ডেভিড খান',
    title: 'ব্যবসা মালিক',
    quote: 'ডিজিটাল হাব থেকে কেনা থিম দিয়ে আমার অনলাইন স্টোর শুরু করেছি। তাদের সাপোর্ট এবং পণ্যের মান দুটোই চমৎকার।',
    avatar: 'https://freepicbd.com/wp-content/uploads/2025/04/%E0%A6%95%E0%A6%BE%E0%A6%B2%E0%A7%8B-%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A7%8B%E0%A6%AB%E0%A6%BE%E0%A6%87%E0%A6%B2-%E0%A6%AA%E0%A6%BF%E0%A6%95%E0%A6%9A%E0%A6%BE%E0%A6%B0-16.webp',
  },
  {
    name: 'জেসিকা আক্তার',
    title: 'ডেভেলপার',
    quote: 'নেক্সট.জেএস প্ল্যাটফর্মটি অসাধারণ। এটি আমাকে দ্রুত এবং শক্তিশালী ওয়েব অ্যাপ তৈরি করতে সাহায্য করেছে।',
    avatar: 'https://i.pinimg.com/736x/c4/f7/e2/c4f7e26e3c34726924222605b67d8621.jpg',
  },
];
