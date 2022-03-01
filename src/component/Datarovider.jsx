import React, { createContext, useState, useEffect } from "react";
export const DataContext = createContext();

export const Datarovider = (props) => {
  const [products, setProducts] = useState([
    {
      _id: "1",
      title: "Wacth Product 01",
      images: [
        "https://106kqa307e6v2oixfq35mqbj-wpengine.netdna-ssl.com/wp-content/uploads/2020/10/ingredients-1024x1024.jpg",
        "https://alsaqrstore.com/wp-content/uploads/2020/01/item_XXL_22619399_32783694.jpg",
        "https://alsaqrstore.com/wp-content/uploads/2020/01/item_XXL_22619399_32783694.jpg",
        "https://alsaqrstore.com/wp-content/uploads/2020/01/item_XXL_22619399_32783694.jpg",
      ],
      description:
        "Similar to natural oils, artificial hair oils can decrease scalp dryness by forming hydrophobic films that decrease transepidermal water loss reducing evaporation from water from the skin.",
      content:
        "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      price: 101,
      count: 1,
    },
    {
      _id: "2",
      title: "Wacth Product 02",
      images: [
        "https://th.bing.com/th/id/R.79929bb61233a3193e839a66ccb04c8e?rik=ZvJSZHbJUhd4Ug&pid=ImgRaw&r=0",
        "https://www.upsieutoc.com/images/2020/07/18/img1.jpg",
        "https://www.upsieutoc.com/images/2020/07/18/img3.jpg",
        "https://www.upsieutoc.com/images/2020/07/18/img4.jpg",
      ],
      description:
        "Humans produce natural similar oils such as lanolin. Similar to natural oils, artificial hair from the skin.",
      content:
        "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      colors: ["red", "black", "teal"],
      sizes: ["XL", "L", "M", "XM", "LX"],
      price: 102,
      count: 1,
    },
    {
      _id: "3",
      title: "Wacth Product 03",
      images: [
        "https://cdn.salla.sa/KvlGV/YXUPFeAYkBipqV87r7qYU9D7buDu6QdkeUNbXvom.jpg",
        "https://www.upsieutoc.com/images/2020/07/18/img2.jpg",
        "https://www.upsieutoc.com/images/2020/07/18/img1.jpg",
        "https://www.upsieutoc.com/images/2020/07/18/img4.jpg",
      ],
      description:
        "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
      content:
        "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      colors: ["red", "black", "teal"],
      sizes: ["XL", "L", "M", "XM", "LX"],
      price: 103,
      countt: 1,
    },
    {
      _id: "4",
      title: "Wacth Product 04",
      images: [
        "https://th.bing.com/th/id/R.147ccde7f1c9dd5efec211da470c32f8?rik=6lTxjSq5VTKYuQ&pid=ImgRaw&r=0",
        "https://www.upsieutoc.com/images/2020/07/18/img2.jpg",
        "https://www.upsieutoc.com/images/2020/07/18/img3.jpg",
        "https://www.upsieutoc.com/images/2020/07/18/img1.jpg",
      ],
      description:
        "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
      content:
        "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      colors: ["red", "black", "teal"],
      sizes: ["XL", "L", "M", "XM", "LX"],
      price: 104,
      count: 1,
    },
    {
      _id: "5",
      title: "Wacth Product 05",
      images: [
        "https://th.bing.com/th/id/R.147ccde7f1c9dd5efec211da470c32f8?rik=6lTxjSq5VTKYuQ&pid=ImgRaw&r=0",
        "https://www.upsieutoc.com/images/2020/07/18/img2.jpg",
        "https://www.upsieutoc.com/images/2020/07/18/img3.jpg",
        "https://www.upsieutoc.com/images/2020/07/18/img4.jpg",
      ],
      description:
        "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
      content:
        "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      colors: ["red", "black", "teal"],
      sizes: ["XL", "L", "M", "XM", "LX"],
      price: 105,
      count: 1,
    },
    {
      _id: "6",
      title: "Wacth Product 06",
      images: [
        "https://th.bing.com/th/id/R.147ccde7f1c9dd5efec211da470c32f8?rik=6lTxjSq5VTKYuQ&pid=ImgRaw&r=0",
        "https://www.upsieutoc.com/images/2020/07/18/img2.jpg",
        "https://www.upsieutoc.com/images/2020/07/18/img3.jpg",
        "https://www.upsieutoc.com/images/2020/07/18/img4.jpg",
      ],
      description:
        "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
      content:
        "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      colors: ["red", "black", "teal"],
      sizes: ["XL", "L", "M", "XM", "LX"],
      price: 106,
      count: 1,
    },
  ]);

  const [cart, setCart] = useState([]);

  const addCart = (id) => {
    const check = cart.every((item) => {
      return item._id !== id;
    });
    if (check) {
      const data = products.filter((product) => {
        return product._id === id;
      });
      setCart([...cart, ...data]);
    } else {
      alert("the prodect has been added to cart");
    }
  };

  useEffect(() => {
    const dataCart = JSON.parse(localStorage.getItem("dataCart"));
    if (dataCart) setCart(dataCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("dataCart", JSON.stringify(cart));
  }, [cart]);

  const value = {
    products: [products, setProducts],
    cart: [cart, setCart],
    addCart: addCart,
  };
  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};
