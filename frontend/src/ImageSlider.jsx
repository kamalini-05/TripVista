import React, { useState, useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import gsap from "gsap";

// ✅ Image paths (use public/assets folder)
const images = [
  "/images/Temple/Tirupati Temple.jpg",
  "/images/Temple/Tawang Monastery.jpg",
  "/images/Temple/ Kamakhya Temple.jpg",
  "/images/Temple/ Mahabodhi Temple.jpg",
  "/images/Temple/Bhoramdeo Temple.jpg",
  "/images/Temple/Mangeshi Temple.jpg",
  "/images/Temple/Somnath Temple.jpg",
  "/images/Temple/Sheetla Mata Temple.jpg",
  "/images/Temple/Jwalamukhi Temple.jpg",
  "/images/Temple/Baidyanath Temple.jpg",
  "/images/Temple/Virupaksha Temple.jpg",
  "/images/Temple/Padmanabhaswamy Temple.jpg",
  "/images/Temple/Mahakaleshwar Temple.jpg",
  "/images/Temple/Siddhivinayak Temple.jpg",

];

function ImageSlider() {
  const [current, setCurrent] = useState(0);
  const [left, setLeft] = useState(images.length - 1);
  const [right, setRight] = useState(1);

  useEffect(() => {
    if (current === 0) {
      setLeft(images.length - 1);
      setRight(1);
    } else if (current === images.length - 1) {
      setLeft(current - 1);
      setRight(0);
    } else {
      setLeft(current - 1);
      setRight(current + 1);
    }
  }, [current]);

  const animate = (dir) => {
    const x = dir === "next" ? -200 : 200;
    gsap.fromTo(".main", { x, opacity: 0, scale: 0.8 }, { x: 0, opacity: 1, scale: 1, duration: 0.5 });
  };

  const next = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
    animate("next");
  };

  const prev = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
    animate("prev");
  };

  return (
    <div style={styles.container}>
      <div style={styles.imageRow}>
        <img src={images[left]} style={styles.side} className="side left" alt="Left" />
        <img src={images[current]} style={styles.main} className="main" alt="Main" />
        <img src={images[right]} style={styles.side} className="side right" alt="Right" />
      </div>

      <div style={styles.controls}>
        <button style={styles.button} onClick={prev}><IoIosArrowBack /></button>
        <button style={styles.button} onClick={next}>
          <IoIosArrowBack style={{ transform: "rotate(180deg)" }} />
        </button>
      </div>

      <div style={styles.dots}>
        {images.map((_, i) => (
          <span
            key={i}
            style={{
              ...styles.dot,
              backgroundColor: i === current ? "#fff" : "#555"
            }}
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#111",
    color: "white"
  },
  imageRow: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px"
  },
  main: {
    width: "650px",
    height: "400px",
    objectFit: "cover",
    borderRadius: "10px",
    boxShadow: "0 0 10px #fff"
  },
  side: {
    width: "150px",
    height: "100px",
    objectFit: "cover",
    opacity: 0.6,
    borderRadius: "6px"
  },
  controls: {
    marginTop: "10px"
  },
  button: {
    margin: "10px",
    fontSize: "2rem",
    background: "none",
    border: "none",
    color: "white",
    cursor: "pointer"
  },
  dots: {
    marginTop: "10px"
  },
  dot: {
    display: "inline-block",
    width: "12px",
    height: "12px",
    margin: "0 5px",
    borderRadius: "50%"
  }
};

export default ImageSlider;
