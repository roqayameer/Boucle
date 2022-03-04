import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const DataContext = createContext();

export const Datarovider = (props) => {
  const [products_image, setproducts_image] = useState({
    img1: "https://106kqa307e6v2oixfq35mqbj-wpengine.netdna-ssl.com/wp-content/uploads/2020/10/ingredients-1024x1024.jpg",
    img2: "https://th.bing.com/th/id/R.79929bb61233a3193e839a66ccb04c8e?rik=ZvJSZHbJUhd4Ug&pid=ImgRaw&r=0",
    img3: "https://th.bing.com/th/id/OIP._k-4kjE3KDQSs_IqtFsMNgHaHa?pid=ImgDet&rs=1",
    img4: "https://th.bing.com/th/id/R.147ccde7f1c9dd5efec211da470c32f8?rik=6lTxjSq5VTKYuQ&pid=ImgRaw&r=0",
    img5: "https://i.pinimg.com/originals/f4/da/34/f4da343f6c4f02eeae3afd82c6e66a1e.jpg",
  });
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    // const dataCart = JSON.parse(localStorage.getItem("dataCart"));
    // if (dataCart) setCart(dataCart);
    var config = {
      method: "Get",
      url: "https://compute-django.herokuapp.com/api/products",
      // url:'https://fakestoreapi.com/products',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
      withCredentials: false,
      // data: data,
    };
    axios(config)
      .then(function (response) {
        let products = [];
        // console.log(JSON.stringify(response.data));
        products = response.data;
        setProducts(products);
        console.log("iam pppppp", products);
      })
      .catch(function (error) {
        console.log(error.response);
      });
      // fetchData()
  }, []);

  const fetchData = () => {
    let config2 = {
      method: "get",
      url: "https://compute-django.herokuapp.com/api/orders/cart",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${loggedstate}`,
      },
    };
    axios(config2)
      .then((response) => {
        console.log(response.data);
        // let carts = [];
        let carts = response.data;
        console.log("cartttttttt1111", carts);
        setCarts(carts);
        console.log("cartttttttt", carts);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  let loggedstate = JSON.parse(localStorage.getItem("token"));
  const addCart = (id) => {
    var config = {
      method: "post",
      url: "https://compute-django.herokuapp.com/api/orders/add-to-cart",
      headers: {
        Authorization: `Bearer ${loggedstate}`,
        Accept: "application/json",
        "Content-Type": "text/plain",
      },
      data: {
        product_id: id,
        item_qty: 1,
      },
    };

    axios(config)
      .then(function (response) {
        console.log("Hiiiiiiiiiiiii", JSON.stringify(response.data));
        fetchData();
        alert("It was completed");

        /*const check = cart.every((item) => {
          return item.id !== id;
        });
        if (check) {
          const data = products.filter((product) => {
            return product.id === id;
          });
          setCart([...cart, ...data]);
          console.log("cart", cart);
          console.log("data", data);
        } else {
          alert("the prodect has been added to cart");
        }*/
      })
      .catch((error) => {
        console.log("error from adding", (error.response || {}).data);
      });
  };

  /* useEffect(() => {
    const dataCart = JSON.parse(localStorage.getItem("dataCart"));
    if (dataCart) setCart(dataCart);
  }, []);*/

  /*useEffect(() => {
    localStorage.setItem("dataCart", JSON.stringify(cart));
  }, [cart]);*/

  const value = {
    products: [products, setProducts],
    cart: [cart, setCart],
    carts: [carts, setCarts],
    products_image: [products_image, setproducts_image],
    addCart: addCart,
    fetchData: fetchData
  };
  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};
/* {
      _id: "1",
      title: "Wacth Product 01",
      images: [
        "https://106kqa307e6v2oixfq35mqbj-wpengine.netdna-ssl.com/wp-content/uploads/2020/10/ingredients-1024x1024.jpg",
      ],
      description:
        "Similar to natural oils, artificial hair oils can decrease scalp dryness by forming hydrophobic films that decrease transepidermal water loss reducing evaporation from water from the skin.",
      price: 101,
      count: 1,
    },
    {
      _id: "2",
      title: "Wacth Product 02",
      images: [
        "https://th.bing.com/th/id/R.79929bb61233a3193e839a66ccb04c8e?rik=ZvJSZHbJUhd4Ug&pid=ImgRaw&r=0",

      ],
      description:
        "Humans produce natural similar oils such as lanolin. Similar to natural oils, artificial hair from the skin.",
      price: 102,
      count: 1,
    },
    {
      _id: "3",
      title: "Wacth Product 03",
      images: [
        "https://cdn.salla.sa/KvlGV/YXUPFeAYkBipqV87r7qYU9D7buDu6QdkeUNbXvom.jpg",
      ],
      description:
        "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
      price: 103,
      countt: 1,
    },
    {
      _id: "4",
      title: "Wacth Product 04",
      images: [
        "https://th.bing.com/th/id/R.147ccde7f1c9dd5efec211da470c32f8?rik=6lTxjSq5VTKYuQ&pid=ImgRaw&r=0",

      ],
      description:
        "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
      price: 104,
      count: 1,
    },
    {
      _id: "5",
      title: "Wacth Product 05",
      images: [
        "https://th.bing.com/th/id/R.147ccde7f1c9dd5efec211da470c32f8?rik=6lTxjSq5VTKYuQ&pid=ImgRaw&r=0",
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
      ],
      description:
        "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
      price: 106,
      count: 1,
    },*/
