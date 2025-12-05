export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  status: 'available' | 'unavailable' | 'seasonal' | 'coming-soon';
  timing?: string;
}

export interface SubCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

export interface Category {
  id: string;
  name: string;
  subCategories: SubCategory[];
}

export const menuCategories: Category[] = [
  // ── STARTERS ─────────────────────────────────────
  {
    id: 'starters',
    name: 'STARTERS',
    subCategories: [
      {
        id: 'starters-main',
        name: 'Starters',
        items: [
          { id: 's1', name: 'Veg Samosa (2 pcs)', description: 'Crispy Indian pastry filled with spiced potatoes & peas', price: 5.99, image: '/veg-samosa.jpeg', status: 'available' },
          { id: 's2', name: 'Veg Cutlet (3 pcs)', description: 'Crispy mixed vegetable cutlets', price: 5.99, image: '', status: 'available' },
          { id: 's3', name: 'Babycorn Manchurian', description: 'Indo-Chinese crispy babycorn in spicy sauce', price: 12.99, image: 'https://tandoor.com.sg/wp-content/uploads/2025/06/indian-baby-corn-manchurian-recipe-1750146954.jpg', status: 'available' },
          { id: 's4', name: 'Curry Leaf Gobi', description: 'Curry leaf infused crispy cauliflower', price: 12.99, image: 'https://www.feastingathome.com/wp-content/uploads/2019/10/aloo-gobi-10.jpg', status: 'available' },
          { id: 's5', name: 'Paneer Manchurian', description: 'Cottage cheese cubes tossed in Manchurian sauce', price: 13.99, image: 'https://www.awesomecuisine.com/wp-content/uploads/2008/02/Paneer_Manchurian.jpg', status: 'available' },
          { id: 's6', name: 'Curry Leaf Mushroom', description: 'Crispy mushrooms with curry leaf tempering', price: 13.99, image: 'https://i.ytimg.com/vi/n9TvQ7-1bZE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA5BektlVYeUMv5403z41OVvSrgqw', status: 'available' },
          { id: 's7', name: 'Welcome Soup', description: "Chef's special welcome soup", price: 5.99, image: '', status: 'coming-soon' }
        ]
      }
    ]
  },

  // ── STREET BITES ─────────────────────────────────
  {
    id: 'street-bites',
    name: 'STREET BITES',
    subCategories: [
      {
        id: 'street-main',
        name: 'Street Bites',
        items: [
          { id: 'sb1', name: 'Mirchi Bhajji (Spicy)', description: 'Spicy green chilli fritters', price: 8.99, image: 'https://i.ytimg.com/vi/dlH33vO3RFk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDyTSyvrE4T7J_RvDZswYeYzMcl7A', status: 'coming-soon' },
          { id: 'sb2', name: 'Stuffed Mirchi', description: 'Spiced potato stuffed chilli fritters', price: 9.99, image: 'https://art.whisk.com/image/upload/fl_progressive,h_630,w_1200,c_fill/v1761281410362/recipe/c3f49c67ac9f589cf83e994bd808b18b.jpg', status: 'coming-soon' },
          { id: 'sb3', name: 'Spring Rolls', description: 'Crispy vegetable spring rolls', price: 5.99, image: 'https://saltedmint.com/wp-content/uploads/2024/01/Vegetable-Spring-Rolls-4-500x375.jpg', status: 'available' },
          { id: 'sb4', name: 'Vazhai Poo Vadai', description: 'Traditional banana flower lentil fritters', price: 8.99, image: 'https://www.kannammacooks.com/wp-content/uploads/vazhaipoo-vadai-banana-blossom-vadai-5.jpg', status: 'available' },
          { id: 'sb5', name: 'Mysore Bonda', description: 'Crispy tea-time snack made with flour, onions, spices & curry leaves', price: 8.99, image: '', status: 'coming-soon' },
          { id: 'sb6', name: 'Punugulu', description: 'Fermented batter of rice and urad dal', price: 8.99, image: '', status: 'available' },
        ]
      }
    ]
  },

  // ── TIFFIN ───────────────────────────────────────
  {
    id: 'tiffin',
    name: 'TIFFIN',
    subCategories: [
      {
        id: 'tiffin-main',
        name: 'Tiffin Items',
        items: [
          { id: 't1', name: 'Idly', description: 'Steamed rice & lentil cakes (3 pcs)', price: 8.99, image: 'https://b.zmtcdn.com/data/dish_photos/79f/87ea2e127a2e58e7c08e4a13d857879f.jpg', status: 'available' },
          { id: 't2', name: 'Thatte Idly', description: 'Large plate-sized steamed idly', price: 7.99, image: 'https://5.imimg.com/data5/SELLER/Default/2024/8/446970424/PZ/GY/NE/3260990/thatte-idli.jpg', status: 'available' },
          { id: 't3', name: 'Ghee Podi Idly', description: 'Idly tossed in ghee & spicy podi', price: 8.99, image: 'https://i.postimg.cc/3x3G0qDf/ghee-podi-idli.png', status: 'available' },
          { id: 't4', name: 'Ghee Mini Idly', description: 'Mini idlies soaked in ghee (12 pcs)', price: 8.99, image: 'https://i.postimg.cc/SRwwt8C3/ghee-mini-idly.png', status: 'coming-soon' },
          { id: 't5', name: 'Thatte Ghee Podi Idly', description: 'Large plate-sized idly tossed in ghee & spicy podi', price: 8.99, image: '/thatte-ghee-podi-idly.jpeg', status: 'available' },
          { id: 't6', name: 'Thatte Curry Leaf Idly', description: 'Large plate-sized idly with aromatic curry leaf tempering', price: 8.99, image: '', status: 'available' },
          { id: 't7', name: 'Medhu Vada', description: 'Crispy lentil doughnuts (2 pcs)', price: 8.99, image: 'https://c.ndtvimg.com/2023-09/u113o4r_medu-vada_625x300_06_September_23.jpg', status: 'available' },
          { id: 't8', name: 'Sambar Vada', description: 'Vada soaked in hot sambar', price: 8.99, image: 'https://t4.ftcdn.net/jpg/04/34/93/43/360_F_434934399_px1pXbG9U4NU5H10kCPkkwlKfOwREZVu.jpg', status: 'available' },
          { id: 't9', name: 'Pongal', description: 'South Indian rice & lentil porridge with ghee', price: 8.99, image: 'https://priyafoods.com/cdn/shop/files/PONGALHOT_2.jpg?v=1701948501&width=1780', status: 'coming-soon' }
        ]
      }
    ]
  },

  // ── THALIS (LUNCH) ───────────────────────────────
  {
    id: 'thalis',
    name: 'THALIS (LUNCH)',
    subCategories: [
      {
        id: 'thalis-main',
        name: 'Thalis',
        items: [
          { id: 'th1', name: 'Weekday Thali', description: 'Complete Indian meal with rice, rotis, curries, dal & dessert', price: 14.99, image: '/weekday-thali.jpeg', status: 'available', timing: '11:30 AM - 2:30 PM' },
          { id: 'th2', name: 'ITLU Special Weekend Thali', description: 'Special weekend feast with premium dishes & extras', price: 19.99, image: '', status: 'available', timing: 'Sat & Sun | 11:30 AM - 3:00 PM' }
        ]
      }
    ]
  },

  // ── DOSA ─────────────────────────────────────────
  {
    id: 'dosa',
    name: 'DOSA',
    subCategories: [
      {
        id: 'dosa-main',
        name: 'Dosa Varieties',
        items: [
          { id: 'd1', name: 'Ghee Roast Dosa', description: 'Crispy paper dosa roasted in pure ghee', price: 11.99, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Dosa_and_ghee.jpg/960px-Dosa_and_ghee.jpg', status: 'available' },
          { id: 'd12', name: 'Plain Dosa', description: 'Classic crispy paper thin dosa', price: 11.99, image: '', status: 'available' },
          { id: 'd2', name: 'Masala Dosa', description: 'Classic dosa with potato masala filling', price: 11.99, image: 'https://static.toiimg.com/thumb/54289752.cms?imgsize=495844&width=800&height=800', status: 'available' },
          { id: 'd3', name: 'Nellore Karam Dosa', description: 'Fiery spicy dosa Nellore style', price: 12.99, image: 'https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/eez28wzbprnrzb5nrgxc', status: 'available' },
          { id: 'd4', name: 'Mysore Masala Dosa', description: 'Spicy red chutney spread masala dosa', price: 12.99, image: 'https://i.pinimg.com/736x/2a/c1/51/2ac15169850a766390adcba3a6d28eef.jpg', status: 'available' },
          { id: 'd5', name: 'Bombay Masala Dosa', description: 'Mumbai street-style masala dosa', price: 12.99, image: 'https://cookwithashu.wordpress.com/wp-content/uploads/2021/06/img_20210616_105235-01927107070553445061.jpeg', status: 'available' },
          { id: 'd6', name: 'Paav Bhaji Dosa', description: 'Dosa stuffed with spicy paav bhaji', price: 10.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVOcjlqk-O23YAZ0cKhNw-P_B-QtUjZwQtFg&s', status: 'available' },
          { id: 'd7', name: 'ITLU Special Dosa', description: "Chef's signature special dosa", price: 12.99, image: '', status: 'available' },
          { id: 'd8', name: 'Chocolate Dosa', description: 'Sweet dosa filled with molten chocolate', price: 11.99, image: 'https://www.telugufoodrecipes.com/resources/picture/org/chocolate-dosa.jpg', status: 'available' },
          { id: 'd9', name: 'Cheese Dosa', description: 'Dosa topped with melted cheese', price: 11.99, image: 'https://c.ndtvimg.com/gws/ms/try-this-delicious-chilli-cheese-dosa/assets/5.jpeg?1737004479', status: 'available' },
          { id: 'd10', name: 'Gongura Dosa', description: 'Tangy sorrel leaves flavored dosa', price: 12.99, image: '', status: 'available' },
          { id: 'd11', name: 'Paneer Dosa', description: 'Dosa stuffed with spiced paneer', price: 12.99, image: '', status: 'available' },
          { id: 'd13', name: 'Onion Uttappam', description: 'Thick pancake topped with onions', price: 11.99, image: '', status: 'available' },
          { id: 'd14', name: 'Set Dosa', description: 'Soft spongy dosas served in a set', price: 11.99, image: '', status: 'available' },
          { id: 'd15', name: 'Veggie Uttappam', description: 'Thick pancake topped with mixed vegetables', price: 11.99, image: '', status: 'available' },
          { id: 'd16', name: 'Vegan Dosa', description: 'Plant-based dosa with vegan filling', price: 11.99, image: '', status: 'available' }
        ]
      }
    ]
  },

  // ── VEG CURRIES ──────────────────────────────────
  {
    id: 'veg-curries',
    name: 'VEG CURRIES',
    subCategories: [
      {
        id: 'curries-main',
        name: 'Main Course Curries',
        items: [
          { id: 'c1', name: 'Dal Tadka', description: 'Yellow lentils tempered with ghee & spices', price: 12.99, image: 'https://vegecravings.com/wp-content/uploads/2018/01/Dal-Tadka-Recipe-Step-By-Step-Instructions-1024x822.jpg', status: 'available', timing: '5:00 PM onwards' },
          { id: 'c2', name: 'Channa Masala', description: 'Punjabi style chickpea curry', price: 13.99, image: 'https://sixhungryfeet.com/wp-content/uploads/2023/06/Easy-Chana-Masala-Recipe-8.jpg', status: 'available', timing: '5:00 PM onwards' },
          { id: 'c3', name: 'Kajju Paneer', description: 'Paneer in rich cashew nut gravy', price: 14.99, image: 'https://i.ytimg.com/vi/Cu9P1hUelRs/maxresdefault.jpg', status: 'available', timing: '5:00 PM onwards' },
          { id: 'c4', name: 'Phool Makhana Curry', description: 'Fox nuts in creamy gravy', price: 14.99, image: 'https://www.madhuseverydayindian.com/wp-content/uploads/2025/09/dhaba-style-makhana-curry.jpg', status: 'available', timing: '5:00 PM onwards' },
          { id: 'c5', name: 'Malai Kofta', description: 'Cheese & veggie dumplings in creamy gravy', price: 14.99, image: 'https://carameltintedlife.com/wp-content/uploads/2020/11/Malai-Kofta-1-of-1-9.jpg', status: 'available', timing: '5:00 PM onwards' },
          { id: 'c6', name: 'Saag Paneer', description: 'Paneer cubes in creamy spinach gravy', price: 14.99, image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/saag-paneer-4893170.jpg', status: 'available', timing: '5:00 PM onwards' }
        ]
      }
    ]
  },

  // ── BREADS ───────────────────────────────────────
  {
    id: 'breads',
    name: 'BREADS',
    subCategories: [
      {
        id: 'bread-main',
        name: 'Indian Breads',
        items: [
          { id: 'b1', name: 'Plain Naan', description: 'Soft leavened bread', price: 3.49, image: 'https://cdn.uengage.io/uploads/28289/image-K7S24X-1721306097.jpg', status: 'available', timing: '5:00 PM onwards' },
          { id: 'b2', name: 'Butter Naan', description: 'Naan brushed with butter', price: 3.99, image: 'https://static.toiimg.com/photo/53338316.cms', status: 'available', timing: '5:00 PM onwards' },
          { id: 'b3', name: 'Garlic Naan', description: 'Naan topped with fresh garlic', price: 4.49, image: 'https://allwaysdelicious.com/wp-content/uploads/2022/04/garlic-butter-naan-4-1024x682.jpg', status: 'available', timing: '5:00 PM onwards' },
          { id: 'b4', name: 'Chilli Garlic Naan', description: 'Spicy chilli & garlic naan', price: 4.49, image: 'https://aarkayvaishnodhaba.com/wp-content/uploads/2022/07/maxresdefault.jpg', status: 'available', timing: '5:00 PM onwards' }
        ]
      }
    ]
  },

  // ── CHAAT ────────────────────────────────────────
  {
    id: 'chaat',
    name: 'CHAAT',
    subCategories: [
      {
        id: 'chaat-main',
        name: 'Chaat Corner',
        items: [
          { id: 'ch1', name: 'Dahi Papdi Chaat', description: 'Crispy papdi with yogurt & chutneys', price: 7.99, image: '/dahi-papdi-chaat.jpeg', status: 'available' },
          { id: 'ch2', name: 'Samosa Chaat', description: 'Crushed samosa with chaat toppings', price: 7.99, image: 'https://www.cookwithmanali.com/wp-content/uploads/2019/09/Samosa-Chaat-500x500.jpg', status: 'available' },
          { id: 'ch3', name: 'Bhel Puri', description: 'Puffed rice mixed with chutneys & sev', price: 7.99, image: 'https://www.awesomecuisine.com/wp-content/uploads/2007/11/bhel-puri-500x375.jpg', status: 'available' },
          { id: 'ch4', name: 'Paav Bhaji', description: 'Mumbai style spicy vegetable mash with buttered buns', price: 9.99, image: 'https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Instant-Pot-Mumbai-Pav-Bhaji-Recipe.jpg', status: 'coming-soon' },
          { id: 'ch5', name: 'Pani Puri (8 pcs)', description: 'Crispy puris filled with spicy water', price: 7.99, image: 'https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/pani_puri_73491_16x9.jpg', status: 'available' }
        ]
      }
    ]
  },

  // ── BIRYANI / PULAO ──────────────────────────────
  {
    id: 'biryani',
    name: 'BIRYANI / PULAO',
    subCategories: [
      {
        id: 'biryani-main',
        name: 'Rice Specials',
        items: [
          { id: 'bir1', name: 'Veg Kheema Biryani', description: 'Spiced soya granules biryani', price: 15.99, image: 'https://glebekitchen.com/wp-content/uploads/2022/10/keemaricefrontbowl.jpg', status: 'available', timing: '5:00 PM onwards' },
          { id: 'bir2', name: 'Palamuru Veg Biryani', description: 'Telangana special vegetable biryani', price: 14.99, image: 'https://b.zmtcdn.com/data/pictures/chains/3/19708853/8a70586f929c1bdfa90d66884d978047.jpg', status: 'available', timing: '5:00 PM onwards' },
          { id: 'bir3', name: 'Gongura Paneer Biryani', description: 'Tangy sorrel leaves & paneer biryani', price: 15.99, image: 'https://blogger.googleusercontent.com/img/a/AVvXsEj6YKtGojYx71xoJgVXFPjGWC0P21CjHptPVvwr-51Tqr6nyxPT68VWtfvKSG91_i5RqDSTqoLsFOErZPUojDSkrjvk2svPLJU5-2jAvdvZA2g5922o3gLsSu4rT8xd9jUib01HRdYnjsoA_P1CZ5zszhan09boSDWhFTJXHWTXAwH6jJcjqBFMtQ=w1200-h630-p-k-no-nu', status: 'available', timing: '5:00 PM onwards' },
          { id: 'bir4', name: 'Veg Paneer Pulao', description: 'Fragrant rice with paneer & vegetables', price: 14.99, image: 'https://images.getrecipekit.com/20240109085057-matar-20paneer-20pulao.jpg?aspect_ratio=16:9&quality=90&', status: 'coming-soon', timing: '5:00 PM onwards' },
          { id: 'bir5', name: 'Lemon Coriander Paneer Biryani', description: 'Zesty lemon & coriander flavored biryani', price: 14.99, image: 'https://ministryofcurry.com/wp-content/uploads/2023/10/paneer-biryani_-7.jpg', status: 'available', timing: '5:00 PM onwards' },
          { id: 'bir6', name: 'Palamuru Paneer Biryani', description: 'Zesty Paneer & flavored biryani', price: 14.99, image: 'https://ministryofcurry.com/wp-content/uploads/2023/10/paneer-biryani_-7.jpg', status: 'available', timing: '5:00 PM onwards' },
          { id: 'pul1', name: 'Veg Kheema Pulao', description: 'Spiced soya granules pulao', price: 15.99, image: '', status: 'available', timing: '5:00 PM onwards' },
          { id: 'pul2', name: 'Palamuru Veg Pulao', description: 'Telangana special vegetable pulao', price: 14.99, image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/06/vegetable-pulao.jpg', status: 'available', timing: '5:00 PM onwards' },
          { id: 'pul3', name: 'Gongura Paneer Pulao', description: 'Tangy sorrel leaves & paneer pulao', price: 15.99, image: 'https://www.sharmispassions.com/wp-content/uploads/2021/05/gongura-pulao-recipe.jpg', status: 'available', timing: '5:00 PM onwards' },
          { id: 'pul4', name: 'Lemon Coriander Paneer Pulao', description: 'Zesty lemon & coriander flavored pulao', price: 14.99, image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/lemon-rice-recipe.jpg', status: 'available', timing: '5:00 PM onwards' },
          { id: 'pul5', name: 'Palamuru Paneer Pulao', description: 'Telangana style paneer pulao', price: 14.99, image: 'https://www.vegrecipesofindia.com/wp-content/uploads/2018/05/paneer-pulao-recipe-1.jpg', status: 'available', timing: '5:00 PM onwards' }
        ]
      }
    ]
  },

  // ── DESSERTS ─────────────────────────────────────
  {
    id: 'desserts',
    name: 'DESSERTS',
    subCategories: [
      {
        id: 'eggless-pastries',
        name: 'Eggless Pastries',
        items: [
          { id: 'des1', name: 'Pineapple Pastry', description: 'Eggless pineapple cream pastry', price: 4.99, image: 'https://i.ytimg.com/vi/-ktkATXlRiU/maxresdefault.jpg', status: 'available' },
          { id: 'des2', name: 'Butterscotch Pastry', description: 'Eggless butterscotch cream pastry', price: 4.99, image: 'https://thumbs.dreamstime.com/b/butterscotch-pastry-various-kinds-baked-products-made-mainly-flour-sugar-milk-butter-42550303.jpg', status: 'available' },
          { id: 'des3', name: 'Black Forest Pastry', description: 'Eggless chocolate & cherry pastry', price: 4.99, image: 'https://kreamz.in/wp-content/uploads/2023/12/black-forest-pastry.webp', status: 'available' },
          { id: 'des4', name: 'Honey Cake', description: 'Honey soaked cake slice', price: 4.99, image: 'https://www.onceuponachef.com/images/2024/09/honey-cake-2.jpg', status: 'available' },
          { id: 'des18', name: 'Rasmalai Pastry', description: 'Eggless rasmalai flavored cream pastry', price: 4.99, image: '', status: 'available' },
          { id: 'des19', name: 'Tiramisu Pastry', description: 'Eggless tiramisu flavored cream pastry', price: 5.99, image: '', status: 'available' },
          { id: 'des20', name: 'Badam Milk Pastry', description: 'Eggless almond milk flavored cream pastry', price: 5.99, image: '', status: 'available' },
          ]
      },
      {
        id: 'indian-desserts',
        name: 'Indian Desserts',
        items: [
          { id: 'des5', name: 'Mango Mousse', description: 'Light & creamy mango mousse', price: 6.99, image: 'https://www.chefnotrequired.com/wp-content/uploads/2023/03/mango-mousse-blog-hero.jpeg', status: 'available' },
          { id: 'des6', name: 'Rasmalai Mousse', description: 'Fusion rasmalai flavored mousse', price: 6.99, image: 'https://worldcafeforu.com/wp-content/uploads/2016/06/img_0292.jpg', status: 'available' },
          { id: 'des7', name: 'Apricot Delight', description: 'Layered apricot cream dessert', price: 6.99, image: 'https://spaceshipsandlaserbeams.com/wp-content/uploads/2023/04/Apricot-Delight-Recipe-Card.jpg', status: 'available' },
          { id: 'des8', name: 'Gulab Jamun', description: 'Soft milk dumplings in rose syrup', price: 4.99, image: 'https://images.cdn-files-a.com/uploads/7191456/800_639c93907ccf0.jpg', status: 'coming-soon' },
          { id: 'des9', name: 'Rasmalai (4 pcs)', description: 'Spongy cheese patties in sweetened milk', price: 5.99, image: 'https://spicesnflavors.com/wp-content/uploads/2018/05/rasmalai-3-min.jpg', status: 'available' },
          { id: 'des10', name: 'Dilpasand (Slice)', description: 'Coconut & tutti-frutti filled sweet bread', price: 4.99, image: 'https://m.media-amazon.com/images/I/61Cf6YKfipL._AC_UF894,1000_QL80_.jpg', status: 'available' },
          { id: 'des11', name: 'Fruit Custard', description: 'Vanilla custard with fresh fruits', price: 6.99, image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/05/fruit-custard.jpg', status: 'available' },
          { id: 'des12', name: 'Mango Mastani', description: 'Thick mango milkshake topped with ice cream', price: 9.99, image: 'https://www.sailusfood.com/wp-content/uploads/2016/06/mango-mastani-recipe.jpg', status: 'available' }
        ]
      },
      {
        id: 'eggless-icecreams',
        name: 'Eggless Ice-creams',
        items: [
          { id: 'des13', name: 'Mango Ice Cream', description: 'Creamy eggless mango flavor', price: 3.99, image: 'https://bakewithshivesh.com/wp-content/uploads/2022/05/IMG_9492-scaled.jpg', status: 'available' },
          { id: 'des14', name: 'Chocolate Ice Cream', description: 'Rich eggless chocolate ice cream', price: 3.99, image: 'https://cdn.loveandlemons.com/wp-content/uploads/2025/05/chocolate-ice-cream.jpg', status: 'available' },
          { id: 'des15', name: 'Vanilla Ice Cream', description: 'Classic eggless vanilla ice cream', price: 3.99, image: 'https://www.cuisinart.co.uk/dw/image/v2/ABAF_PRD/on/demandware.static/-/Sites-uk-cuisinart-sfra-Library/default/dw02d70fe5///images/recipes/classic-vanilla-ice-cream.jpg?sw=1200&sh=1200&sm=fit', status: 'available' },
          { id: 'des16', name: 'Paan Ice Cream', description: 'Eggless betel leaf flavored ice cream', price: 3.99, image: 'https://img-cdn.publive.online/fit-in/1200x675/sanjeev-kapoor/media/media_files/2024/11/14/0rAczXBoCW5vFQQN7VM5.jpg', status: 'available' },
          { id: 'des17', name: 'Butterscotch Ice Cream', description: 'Eggless betel leaf flavored ice cream', price: 3.99, image: '', status: 'coming-soon' }
        ]
      }
    ]
  },

  // ── MOCKTAILS & SHAKES ───────────────────────────
  {
    id: 'mocktails',
    name: 'MOCKTAILS',
    subCategories: [
      {
        id: 'mocktails-list',
        name: 'Mocktails',
        items: [
          { id: 'm1', name: 'Lavender Haze', description: 'Floral & refreshing mocktail', price: 9.99, image: 'https://i.pinimg.com/736x/6c/7c/11/6c7c112f5ca2775417cf91be29f4b681.jpg', status: 'available' },
          { id: 'm2', name: 'Mango Habanero', description: 'Sweet & spicy mango mocktail', price: 9.99, image: '/mango-habbanero.jpeg', status: 'available' },
          { id: 'm3', name: 'Cucumber Mint Mojito', description: 'Cooling cucumber & mint mocktail', price: 9.99, image: 'https://oliviaskitchen.com/wp-content/uploads/2025/01/cucumber-mojito-mocktail-featured.jpg', status: 'available' },
          { id: 'm4', name: 'Kiwi Lemonade', description: 'Tangy kiwi & lemon mocktail', price: 9.99, image: 'https://i.ytimg.com/vi/-YuqwXOtnY8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB5s4SO5kI73w6TDO66DyX5anK1kQ', status: 'available' },
          { id: 'm5', name: 'Guava Glow', description: 'Pink guava mocktail', price: 9.99, image: 'https://modernmuze.com/wp-content/uploads/2025/01/Modern-Muze-Article-Templates-14.png', status: 'available' },
          { id: 'm6', name: 'Lychee Sunrise', description: 'Lychee & orange layered mocktail', price: 9.99, image: 'https://www.cocktailmag.fr/media/k2/items/cache/litchi-sunrise.jpg', status: 'available' },
          { id: 'm7', name: 'Sweet Sunrise', description: 'Orange & grenadine mocktail', price: 9.99, image: 'https://i0.wp.com/sweetsandthankyou.com/wp-content/uploads/2022/01/Sweet-Sunrise-Mocktail23-2.jpg', status: 'available' },
          { id: 'm8', name: 'Blue Lagoon', description: 'Blue curaçao lemonade mocktail', price: 9.99, image: 'https://www.cupofzest.com/wp-content/uploads/2022/03/Blue-Lagoon-Mocktail-Thumbnail-2-Web.jpg.jpg', status: 'available' }
        ]
      },
      {
        id: 'shakes',
        name: 'Milk Shakes',
        items: [
          { id: 'ms1', name: 'Mango Milk Shake', description: 'Creamy mango shake', price: 8.99, image: 'https://www.funfoodfrolic.com/wp-content/uploads/2021/05/Mango-Shake-Thumbnail.jpg', status: 'coming-soon' },
          { id: 'ms2', name: 'Strawberry Milk Shake', description: 'Fresh strawberry shake', price: 8.99, image: 'https://assets.epicurious.com/photos/647df8cad9749492c4d5d407/1:1/w_4506,h_4506,c_limit/StrawberryMilkshake_RECIPE_053123_3599.jpg', status: 'coming-soon' },
          { id: 'ms3', name: 'Chocolate Milk Shake', description: 'Rich chocolate shake', price: 8.99, image: 'https://www.organicvalley.coop/_next/image/?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F5dqbssss%2Fproduction-v3%2F3ba3f137c02a6f320c156bb7c39e362bdbd87bb8-1356x1576.jpg&w=3840&q=75', status: 'coming-soon' }
        ]
      }
    ]
  },

  // ── PAAN ─────────────────────────────────────────
  {
    id: 'paan',
    name: 'PAAN',
    subCategories: [
      {
        id: 'paan-main',
        name: 'Paan',
        items: [
          { id: 'p1', name: 'Sweet Paan', description: 'Traditional meetha paan', price: 3.99, image: '/sweet-pan.jpeg', status: 'available' }
        ]
      }
    ]
  },

  // ── NOODLES ───────────────────────────────────────
  {
    id: 'noodles',
    name: 'NOODLES',
    subCategories: [
      {
        id: 'noodles-main',
        name: 'Chinese',
        items: [
          { id: 'n1', name: 'Veg Noodles', description: 'Stir-fried noodles with vegetables', price: 11.99, image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/hakka-noodles-recipe.jpg', status: 'available' }
        ]
      }
    ]
  },

  // ── TANDOOR ──────────────────────────────────────
  {
    id: 'tandoor',
    name: 'TANDOOR',
    subCategories: [
      {
        id: 'tandoor-main',
        name: 'Tandoor Specials',
        items: [
          { id: 'tan1', name: 'Paneer Tikka Kebab', description: 'Tandoor grilled spiced paneer cubes', price: 14.99, image: 'https://sharethespice.com/wp-content/uploads/2024/02/Paneer-Tikka-Featured.jpg', status: 'available' }
        ]
      }
    ]
  },

  // ── BEVERAGES ────────────────────────────────────
  {
    id: 'beverages',
    name: 'BEVERAGES',
    subCategories: [
      {
        id: 'hot',
        name: 'Hot Beverages',
        items: [
          { id: 'bev1', name: 'Filter Coffee', description: 'South Indian filter coffee', price: 3.99, image: '/filter-coffee.jpeg', status: 'available' },
          { id: 'bev2', name: 'ITLU Special Tea', description: 'Spiced Indian Special masala tea', price: 3.99, image: '/tea.jpeg', status: 'available' },
          { id: 'bev3', name: 'Irani Chai', description: 'Special Irani chai', price: 3.99, image: '', status: 'coming-soon' }
        ]
      },
      {
        id: 'cold',
        name: 'Cold Drinks',
        items: [
          { id: 'bev3', name: 'Soda', description: 'Chilled soft drink', price: 2.99, image: 'https://fmcg-viet.com/wp-content/uploads/2023/04/soft-drink.jpg', status: 'available' },
          { id: 'bev4', name: 'Water Bottle (1L)', description: 'Mineral water', price: 0.99, image: 'https://www.shutterstock.com/image-photo/illustrative-editorial-premium-global-bottled-600nw-2300719035.jpg', status: 'available' }
        ]
      }
    ]
  },
];