import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import HeroSection from '../components/HeroSection';
import ShoeInfoSection from '../components/ShoeInfoSection';
import '../styles/Shop.css';
import { FaHeart, FaRegHeart } from 'react-icons/fa'; // Import heart icons
import { addToCart, addToWishlist } from '../api';

const shoes = [
  
  {
    id: 1,
    name: "Oneplus Bullets Z2 Bluetooth",
    price: 3299,
    img: "https://m.media-amazon.com/images/I/31pAe23ncfL._SR480,440_.jpg",
  },
  {
    id: 2,
    name: "Urban Blaze: Denim",
    price: 2499,
    img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1722523822_2707220.jpg?format=webp&w=300&dpr=1.3",
  },
  {
    id: 3,
    name: " Mirror Tulip Cube LED Lamp ",
    price: 499,
    img: "https://m.media-amazon.com/images/I/61+wZpnu06L._AC_UL320_.jpg",
  },
  {
    id: 4,
    name: "Toddler Handbag Mini",
    price: 1999,
    img: "https://m.media-amazon.com/images/I/41+LT+pZQhL._AC_UL320_.jpg",
  },
  {
    id: 5,
    name: " Girl Printed Mini Frock",
    price: 499,
    img: "https://images-eu.ssl-images-amazon.com/images/I/71vBXHb8FDL._AC_UL165_SR165,165_.jpg",
  },
  {
    id: 6,
    name: " classy designer sarees",
    price: 1699,
    img: "https://images.meesho.com/images/products/443548959/ivm2o_400.webp",
  },
  {
    id: 7,
    name: "Laddu Gopal Dress",
    price: 569,
    img: "https://images.meesho.com/images/products/29321034/aedbb_400.webp",
  },
  {
    id: 10,
    name: "Fancy Home Decor",
    price: 999,
    img: "https://images.meesho.com/images/products/35651552/gonbk_400.webp",
  },
  {
    id: 11,
    name: "Women kurati",
    price: 1499,
    img: "https://images.meesho.com/images/products/404844612/uv4sq_400.webp",
  },
  {
    id: 12,
    name: "Face-Tint",
    price: 699,
    img: "https://images.meesho.com/images/products/156957009/sczt8_400.webp",
  },
  {
    id: 13,
    name: "TSS Originals: Ignite",
    price: 2299,
    img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1709705663_3622765.jpg?format=webp&w=480&dpr=1.3",
  },
  {
    id: 14,
    name: "MARS skin protecting powder",
    price: 499,
    img: "https://images.meesho.com/images/products/139867286/tdpwr_400.webp",
  },
  {
    id: 15,
    name: "Chakla Belan Tawa Stand",
    price: 299,
    img: "https://images.meesho.com/images/products/31803312/anp3x_512.webp",
  },
  {
    id: 16,
    name: "Food Grade Premium Plastic ",
    price: 499,
    img: "https://images.meesho.com/images/products/396566185/9dusc_512.webp",
  },
  {
    id: 17,
    name: "Mamaearth Vitamin C Facial Kit ",
    price: 599,
    img: "https://images.meesho.com/images/products/301475678/rbkgh_400.webp",
  },
  {
    id: 18,
    name: " Soft Toys",
    price: 899,
    img: "https://images.meesho.com/images/products/63857946/w7vrm_400.webp ",
  },
  {
    id: 19,
    name: "Pisco Girls Comfortablre Flilflops",
    price: 499,
    img: "https://images.meesho.com/images/products/391602150/1anrr_512.webp",
  },
  {
    id: 20,
    name: " Men cap",
    price: 499,
    img: "https://images.meesho.com/images/products/284292880/y0ez0_400.webp",
  },
  {
    id: 21,
    name: "NIRLON Induction Base Pressure Cooker",
    price: 2499,
    img: "https://images.meesho.com/images/products/405307021/iccsd_512.webp",
  },
  {
    id: 22,
    name: " Women jean",
    price: 1499,
    img: "https://images.meesho.com/images/products/327919340/ub9ap_400.webp",
  },
  {
    id: 23,
    name: "Unicorn Mini Wet Wipes ",
    price: 299,
    img: "https://images.meesho.com/images/products/375075196/7zkyo_512.webp",
  },
  {
    id: 24,
    name: "48 Pieces Sketching Kit",
    price: 499,
    img: "https://images.meesho.com/images/products/173578657/xfojj_512.webp",
  },
  {
    id: 25,
    name: "Casual Latest women shorts",
    price: 1299,
    img: "https://images.meesho.com/images/products/394818776/jbwk0_400.webp",
  },
  {
    id: 26,
    name: "Hair Clips",
    price: 799,
    img: "https://images.meesho.com/images/products/433249554/socs3_512.webp",
  },
  {
    id: 27,
    name: "Mini Dress ",
    price: 899,
    img: "https://images.meesho.com/images/products/186168075/rmbsp_400.webp",
  },
  {
    id: 28,
    name: "Men Shirt",
    price: 799,
    img: "https://images.meesho.com/images/products/222479409/fewaf_400.webp",
  },
  {
    id: 29,
    name: "Men's Track Pants",
    price: 499,
    img: "https://images.meesho.com/images/products/1707198/1_400.webp",
  },
  {
    id: 30,
    name: "Mini Skirts",
    price: 799,
    img: "https://images.meesho.com/images/products/450095949/ainzc_512.webp",
  },
  {
    id: 31,
    name: "Classic Clock ",
    price: 1999,
    img: "https://images.meesho.com/images/products/312813109/hhi7k_400.webp",
  },
  {
    id: 32,
    name: "LAYER'R Wottagirl Body Splash",
    price: 1799,
    img: "https://images.meesho.com/images/products/341800146/3joi9_400.webp",
  },
  {
    id: 33,
    name: "Unisex kid Watch",
    price: 599,
    img: "https://images.meesho.com/images/products/201739022/lj9v7_400.webp",
  },
  {
    id: 34,
    name: "Vembley Combo Of 9 Pair ",
    price: 799,
    img: "https://images.meesho.com/images/products/68779520/pmxdc_512.webp",
  },
  {
    id: 35,
    name: "POPXO MINI NAIL KIT",
    price: 499,
    img: "https://images.meesho.com/images/products/196812604/2yca2_400.webp",
  },
  {
    id: 36,
    name: "Beautiful Necklace Combo ",
    price: 799,
    img: "https://images.meesho.com/images/products/261238255/jr2um_512.webp",
  },
  {
    id: 37,
    name: "Ronzille Cosmetics Eyebrow Palette Kit",
    price: 699,
    img: "https://images.meesho.com/images/products/21475371/ybgsm_512.webp",
  },
  {
    id: 38,
    name: "Alluring Womens Kurti",
    price: 799,
    img: "https://images.meesho.com/images/products/178709577/ayxnr_512.webp",
  },
  {
    id: 39,
    name: " Classy Men Bracelets",
    price: 299,
    img: "https://images.meesho.com/images/products/432866014/4uxvz_400.webp",
  },
  {
    id: 40,
    name: " Men Belts",
    price: 1799,
    img: "https://images.meesho.com/images/products/407547929/7bd5c_400.webp",
  },
  {
    id: 41,
    name: "Unisex Black Metal Wayfarer",
    price: 999,
    img: "https://images.meesho.com/images/products/389388073/aii8s_512.webp",
  },
  {
    id: 42,
    name: "Sleepsuit Romper",
    price: 799,
    img: "https://images.meesho.com/images/products/83528941/vi98g_400.webp",
  },
  {
    id: 43,
    name: "MULTI JHAdu Cushion Covers",
    price: 799,
    img: "https://images.meesho.com/images/products/74076309/bojic_512.webp",
  },
  {
    id: 44,
    name: "multicolor sticker(pvc vinyl colorful decal)",
    price: 599,
    img: "https://images.meesho.com/images/products/16051412/29055_512.webp",
  },
  {
    id: 45,
    name: "Heart love Sweater",
    price: 799,
    img: "https://images.meesho.com/images/products/218718820/dp1sh_512.webp",
  },
  {
    id: 46,
    name: "Cast Iron Dosa Tawa",
    price: 799,
    img: "https://images.meesho.com/images/products/386191601/x1x50_400.webp",
  },
  {
    id: 47,
    name: "Silicone Case for AirPod Pro ",
    price: 299,
    img: "https://images.meesho.com/images/products/291353462/zcwkq_512.webp",
  },
  {
    id: 48,
    name: " Ear-Phone",
    price: 1999,
    img: "https://images.meesho.com/images/products/391803143/jfh3d_400.webp",
  },
  {
    id: 49,
    name: "Pearl Lavendar JumpsuitM",
    price: 999,
    img: "https://images.meesho.com/images/products/294973406/cuehi_512.webp",
  },
  {
    id: 50,
    name: "customised wallet for men",
    price: 799,
    img: "https://images.meesho.com/images/products/321602137/swygf_512.webp",
  },
  {
    id: 51,
    name: " Baby Girls Modal Fabric dress",
    price: 999,
    img: "https://m.media-amazon.com/images/I/41tIvRCataL._SY500_.jpg",
  },
  {
    id: 52,
    name: "GadgetBite Neckband Case",
    price: 399,
    img: "https://m.media-amazon.com/images/I/61HZZtBUNSL._SY355_.jpg",
  },
  {
    id: 53,
    name: "BenQ GW2480T 24",
    price: 15799,
    img: "https://m.media-amazon.com/images/I/71rjLT3ep0L._SY355_.jpg",
  },
  {
    id: 54,
    name: "Rangoli Large Wall Sticker ",
    price: 499,
    img: "https://images.meesho.com/images/products/7695494/96d3d_512.webp",
  },
  {
    id: 55,
    name: "Men Flip Flop",
    price: 799,
    img: "https://images.meesho.com/images/products/160420648/k7mct_400.webp",
  },
  {
    id: 56,
    name: " Men-shirt",
    price: 499,
    img: "https://images.meesho.com/images/products/367648126/wgxv5_512.webp",
  },
  {
    id: 57,
    name: "Diva Jewellery Set",
    price: 1799,
    img: "https://images.meesho.com/images/products/85630166/cisnh_400.webp",
  },
  {
    id: 58,
    name: "Combo Shirt",
    price: 599,
    img: "https://images.meesho.com/images/products/408065323/2tkim_400.webp",
  },
  {
    id: 59,
    name: "Dosa Tawa",
    price: 799,
    img: "https://images.meesho.com/images/products/440933060/zii5m_400.webp",
  },
  {
    id: 60,
    name: "Unisex Perfume",
    price: 999,
    img: "https://images.meesho.com/images/products/341587912/rlo9z_400.webp",
  },
  {
    id: 61,
    name: "Partywear Sweater",
    price: 799,
    img: "https://images.meesho.com/images/products/426418306/zkppw_400.webp",
  },
  {
    id: 62,
    name: "Natural scrub and soap",
    price: 299,
    img: "https://images.meesho.com/images/products/328554683/cyfcq_400.webp",
  },
  {
    id: 63,
    name: "Jhumka",
    price: 199,
    img: "https://images.meesho.com/images/products/395993664/b5vnp_400.webp",
  },
  {
    id: 64,
    name: "Adrika saree",
    price: 1799,
    img: "https://images.meesho.com/images/products/349226852/glmx7_400.webp",
  },
  {
    id: 65,
    name: "Cushion Covers",
    price: 999,
    img: "https://images.meesho.com/images/products/427134119/p3xqw_400.webp"
  },
  {
    id: 67,
    name: "Top",
    price: 699,
    img: "https://images.meesho.com/images/products/393154763/dg6vr_400.webp",
  },
  {
    id: 68,
    name: "Phone Cover",
    price: 299,
    img: "https://images.meesho.com/images/products/426265005/cevmz_512.webp",
  },
  {
    id: 69,
    name: "Beautiful mangalsutra combo",
    price: 799,
    img: "https://images.meesho.com/images/products/426265005/cevmz_512.webp",
  },
  {
    id: 70,
    name: "ABY GIRLS FROCK",
    price: 899,
    img: "https://images.meesho.com/images/products/390552007/lubtb_512.webp",
  },
  {
    id: 71,
    name: "Metal Bangle set",
    price: 399,
    img: "https://images.meesho.com/images/products/295090617/omjrb_512.webp",
  },
  {
    id: 72,
    name: "Men shoes",
    price: 1799,
    img: "https://images.meesho.com/images/products/298850406/iiw6c_400.webp",
  },
  {
    id: 73,
    name: "Earpods cover",
    price: 299,
    img: "https://images.meesho.com/images/products/447748360/jogmf_400.webp",
  },
  {
    id: 74,
    name: " Fashion Top",
    price: 599,
    img: "https://images.meesho.com/images/products/425902988/tzi9n_400.webp",
  },
  {
    id: 75,
    name: "Vitamin C Serum",
    price: 1999,
    img: "https://images.meesho.com/images/products/444855314/7njjh_400.webp",
  },
  {
    id: 76,
    name: "Fancy Rings",
    price: 499,
    img: "https://images.meesho.com/images/products/319586320/wluum_400.webp",
  },
  {
    id: 77,
    name: "Square Neck full Sleeve Crop Top",
    price: 799,
    img: "https://images.meesho.com/images/products/413225115/h8rzf_512.webp",
  },
  {
    id: 78,
    name: "Woks",
    price: 799,
    img: "https://images.meesho.com/images/products/444313202/rg6nj_400.webp",
  },
  {
    id: 79,
    name: "Matt Black Sunglasses",
    price: 4999,
    img: "https://images.meesho.com/images/products/394816807/3isnh_512.webp",
  },
  {
    id: 80,
    name: "AC Cover",
    price: 799,
    img: "https://images.meesho.com/images/products/416386810/hjt91_400.webp",
  },
  {
    id: 81,
    name: "Squre Sunglasses",
    price: 2499,
    img: "https://images.meesho.com/images/products/431698544/4bqtf_400.webp",
  },
  {
    id: 82,
    name: "Cotton T-Shirt",
    price: 549,
    img: "https://images.meesho.com/images/products/445805760/xixnm_400.webp",
  },
  
  
  {
    id: 83,
    name: "Top",
    price: 599,
    img: "https://images.meesho.com/images/products/241349208/lunme_400.webp",
  },
  {
    id: 84,
    name: "Baby girl dress",
    price: 899,
    img: "https://images.meesho.com/images/products/423445114/q0ewl_400.webp",
  },
  
  {
    id: 85,
    name: "Elegant Men Shirt",
    price: 1999,
    img: "https://images.meesho.com/images/products/408030770/etspi_400.webp",
  },
  
  {
    id: 86,
    name: "Darmaco Face Serum",
    price: 749,
    img: "https://images.meesho.com/images/products/297598389/kynta_400.webp",
  },
  
  {
    id: 87,
    name: "Plix Combo",
    price: 999,
    img: "https://images.meesho.com/images/products/348585027/rmrag_400.webp",
  },
  
  {
    id: 88,
    name: "Wall Hooks",
    price: 799,
    img: "https://images.meesho.com/images/products/400698732/dbdbn_400.webp",
  },
  
  {
    id: 89,
    name: "Puff Style Full Sleeve Crop Top",
    price: 999,
    img: "https://images.meesho.com/images/products/368517173/j6x6s_512.webp",
  },
  
  {
    id: 90,
    name: "Pink Top",
    price: 999,
    img: "https://images.meesho.com/images/products/437992541/ptawx_400.webp",
  },
  {
    id: 91,
    name: "Pendants",
    price: 499,
    img: "https://images.meesho.com/images/products/416323880/nszdm_400.webp",
  },
  {
    id: 92,
    name: "Casual Wear Crop Top",
    price: 799,
    img: "https://images.meesho.com/images/products/366992741/8vgvt_512.webp",
  },
  {
    id: 93,
    name: "crop tie full Sleeve Top",
    price: 799,
    img: "https://images.meesho.com/images/products/382363940/eufac_512.webp",
  },
  {
    id: 94,
    name: "White mom fit boyfriend jeans",
    price: 999,
    img: "https://images.meesho.com/images/products/195396737/ewrmi_400.webp",
  },
  {
    id: 95,
    name: "Tote Bag",
    price: 499,
    img: "https://images.meesho.com/images/products/358123096/na9ay_400.webp",
  },
  {
    id: 96,
    name: "Heels",
    price: 899,
    img: "https://images.meesho.com/images/products/329902992/0ao3q_400.webp",
  },
  {
    id: 97,
    name: "Latest gym bag",
    price: 2999,
    img: "https://images.meesho.com/images/products/355601900/ck5rh_400.webp",
  },
  {
    id: 98,
    name: "Makeup Brush Set ",
    price: 799,
    img: "https://images.meesho.com/images/products/430406770/4hqe7_400.webp",
  },
  {
    id: 99,
    name: "Ear-phone",
    price: 1999,
    img: "https://images.meesho.com/images/products/391803143/jfh3d_400.webp",
  },
  {
    id: 100,
    name: "customised wallet for men",
    price: 799,
    img: "https://images.meesho.com/images/products/321602137/swygf_512.webp",
<<<<<<< HEAD
  },
  {
    id: 101,
    name: "Urban Blaze: Denim",
    price: 2499,
    img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1722523822_2707220.jpg?format=webp&w=300&dpr=1.3",
  },
  {
    id: 102,
    name: " Men cap",
    price: 499,
    img: "https://images.meesho.com/images/products/284292880/y0ez0_400.webp",
  },
  {
    id: 103,
    name: " Men Belts",
    price: 1799,
    img: "https://images.meesho.com/images/products/407547929/7bd5c_400.webp",
  },

=======
  }
>>>>>>> 92ab042298bf612f371538ca3c7ed1fab54c9ec5
];
const Shop = ({ addToCart, addToWishlist, user, wishlist }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleAddToCart = async (product) => {
    if (!user) {
      navigate('/login'); // Redirect to login if not logged in
      return;
    }
    try {
      await addToCart(product);
      alert('Product added to cart!');
    } catch (error) {
      console.error('Error adding to cart:', error);
      alert('Error adding to cart. Please try again.');
    }
  };

  const handleAddToWishlist = async (product) => {
    if (!user) {
      navigate('/login'); // Redirect to login if not logged in
      return;
    }
    try {
      await addToWishlist(product);
      alert('Product added to wishlist!');
    } catch (error) {
      console.error('Error adding to wishlist:', error);
      alert('Error adding to wishlist. Please try again.');
    }
  };

  return (
    <>
      <HeroSection />
      <div className="shop-container">
        {shoes.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.img} alt={product.name} className="product-img" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">₹{product.price}</p>
            <div className="product-actions">
              <button className="add-to-cart" onClick={() => handleAddToCart(product)}>Add to Cart</button>
              <div className="wishlist-icon" onClick={() => handleAddToWishlist(product)}>
                {wishlist.some(item => item.id === product.id) ? <FaHeart /> : <FaRegHeart />}
              </div>
            </div>
          </div>
        ))}
      </div>
      <ShoeInfoSection />
    </>
  );
};

export default Shop;