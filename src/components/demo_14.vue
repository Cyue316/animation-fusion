<template>
  <div class="demo14">
    <div>按钮常用-lottie-web</div>
    <div>https://github.com/airbnb/lottie-web</div>
    <div id="button" class="button_1" ref="button"></div>
    <div id="hand" class="hand_1" ref="hand"></div>
  </div>
</template>
<script>
import lottie from "lottie-web"
import img1 from "../assets/button_1.png"
import img2 from "../assets/button_line.png"
import img3 from "../assets/button_2.png"

import hand from "../assets/hand_1.png"

export default {
  name: "demo_14",
  mounted() {
    const animation = lottie.loadAnimation({
      container: this.$refs.button,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: {
        v: "5.7.8",
        fr: 30,
        ip: 0,
        op: 37,
        w: 750,
        h: 270,
        nm: "button",
        ddd: 0,
        assets: [
          {
            id: "image_0",
            w: 750,
            h: 270,
            u: "",
            p: img1,
            e: 0,
          },
          {
            id: "image_1",
            w: 107,
            h: 192,
            u: "",
            p: img2,
            e: 0,
          },
          {
            id: "image_2",
            w: 750,
            h: 270,
            u: "",
            p: img3,
            e: 0,
          },
        ],
        layers: [
          {
            ddd: 0,
            ind: 1,
            ty: 3,
            nm: "Ctrl",
            sr: 1,
            ks: {
              o: {
                a: 0,
                k: 0,
                ix: 11,
              },
              r: {
                a: 0,
                k: 0,
                ix: 10,
              },
              p: {
                a: 0,
                k: [375, 135, 0],
                ix: 2,
                l: 2,
              },
              a: {
                a: 0,
                k: [0, 0, 0],
                ix: 1,
                l: 2,
              },
              s: {
                a: 1,
                k: [
                  {
                    i: {
                      x: [0.667, 0.667, 0.667],
                      y: [1, 1, 1],
                    },
                    o: {
                      x: [0.333, 0.333, 0.333],
                      y: [0, 0, 0],
                    },
                    t: 0,
                    s: [91, 91, 100],
                  },
                  {
                    i: {
                      x: [0.667, 0.667, 0.667],
                      y: [1, 1, 1],
                    },
                    o: {
                      x: [0.333, 0.333, 0.333],
                      y: [0, 0, 0],
                    },
                    t: 8,
                    s: [100, 100, 100],
                  },
                  {
                    i: {
                      x: [0.667, 0.667, 0.667],
                      y: [1, 1, 1],
                    },
                    o: {
                      x: [0.333, 0.333, 0.333],
                      y: [0, 0, 0],
                    },
                    t: 16,
                    s: [91, 91, 100],
                  },
                  {
                    i: {
                      x: [0.579, 0.579, 0.579],
                      y: [0.636, 0.636, -1.203],
                    },
                    o: {
                      x: [0.23, 0.23, 0.23],
                      y: [0, 0, 0],
                    },
                    t: 25,
                    s: [93, 93, 100],
                  },
                  {
                    t: 36,
                    s: [91, 91, 100],
                  },
                ],
                ix: 6,
                l: 2,
              },
            },
            ao: 0,
            ip: 0,
            op: 145,
            st: 0,
            bm: 0,
          },
          {
            ddd: 0,
            ind: 2,
            ty: 2,
            nm: "mask.png",
            cl: "png",
            parent: 1,
            td: 1,
            refId: "image_0",
            sr: 1,
            ks: {
              o: {
                a: 0,
                k: 100,
                ix: 11,
              },
              r: {
                a: 0,
                k: 0,
                ix: 10,
              },
              p: {
                a: 0,
                k: [0, 0, 0],
                ix: 2,
                l: 2,
              },
              a: {
                a: 0,
                k: [375, 135, 0],
                ix: 1,
                l: 2,
              },
              s: {
                a: 0,
                k: [100, 100, 100],
                ix: 6,
                l: 2,
              },
            },
            ao: 0,
            ip: 0,
            op: 145.862068965517,
            st: 0,
            bm: 0,
          },
          {
            ddd: 0,
            ind: 3,
            ty: 2,
            nm: "light.png",
            cl: "png",
            parent: 1,
            tt: 1,
            refId: "image_1",
            sr: 1,
            ks: {
              o: {
                a: 0,
                k: 80,
                ix: 11,
              },
              r: {
                a: 0,
                k: 0,
                ix: 10,
              },
              p: {
                a: 1,
                k: [
                  {
                    i: {
                      x: 0.549,
                      y: 1,
                    },
                    o: {
                      x: 0.473,
                      y: 0,
                    },
                    t: 0,
                    s: [-364, 0, 0],
                    to: [120, 0, 0],
                    ti: [-120, 0, 0],
                  },
                  {
                    t: 39,
                    s: [356, 0, 0],
                  },
                ],
                ix: 2,
                l: 2,
              },
              a: {
                a: 0,
                k: [53.5, 96, 0],
                ix: 1,
                l: 2,
              },
              s: {
                a: 0,
                k: [100, 100, 100],
                ix: 6,
                l: 2,
              },
            },
            ao: 0,
            ip: 0,
            op: 145.862068965517,
            st: 0,
            bm: 0,
          },
          {
            ddd: 0,
            ind: 4,
            ty: 2,
            nm: "button.png",
            cl: "png",
            parent: 1,
            refId: "image_2",
            sr: 1,
            ks: {
              o: {
                a: 0,
                k: 100,
                ix: 11,
              },
              r: {
                a: 0,
                k: 0,
                ix: 10,
              },
              p: {
                a: 0,
                k: [0, 0, 0],
                ix: 2,
                l: 2,
              },
              a: {
                a: 0,
                k: [375, 135, 0],
                ix: 1,
                l: 2,
              },
              s: {
                a: 0,
                k: [100, 100, 100],
                ix: 6,
                l: 2,
              },
            },
            ao: 0,
            ip: 0,
            op: 145.862068965517,
            st: 0,
            bm: 0,
          },
        ],
        markers: [],
      },
    })
    const animation2 = lottie.loadAnimation({
      container: this.$refs.hand,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: {
        v: "5.7.8",
        fr: 30,
        ip: 0,
        op: 37,
        w: 170,
        h: 170,
        nm: "hand",
        ddd: 0,
        assets: [
          {
            id: "image_0",
            w: 150,
            h: 150,
            u: "",
            p: hand,
            e: 0,
          },
        ],
        layers: [
          {
            ddd: 0,
            ind: 1,
            ty: 3,
            nm: "Ctrl",
            sr: 1,
            ks: {
              o: {
                a: 0,
                k: 0,
                ix: 11,
              },
              r: {
                a: 0,
                k: 0,
                ix: 10,
              },
              p: {
                a: 1,
                k: [
                  {
                    i: {
                      x: 0.667,
                      y: 1,
                    },
                    o: {
                      x: 0.333,
                      y: 0,
                    },
                    t: 0,
                    s: [85, 85, 0],
                    to: [-3.667, -2.667, 0],
                    ti: [0, 0, 0],
                  },
                  {
                    i: {
                      x: 0.667,
                      y: 1,
                    },
                    o: {
                      x: 0.333,
                      y: 0,
                    },
                    t: 9,
                    s: [63, 69, 0],
                    to: [0, 0, 0],
                    ti: [0, 0, 0],
                  },
                  {
                    i: {
                      x: 0.667,
                      y: 1,
                    },
                    o: {
                      x: 0.333,
                      y: 0,
                    },
                    t: 18,
                    s: [85, 85, 0],
                    to: [0, 0, 0],
                    ti: [0, 0, 0],
                  },
                  {
                    i: {
                      x: 0.667,
                      y: 1,
                    },
                    o: {
                      x: 0.333,
                      y: 0,
                    },
                    t: 27,
                    s: [63, 69, 0],
                    to: [0, 0, 0],
                    ti: [-3.667, -2.667, 0],
                  },
                  {
                    t: 36,
                    s: [85, 85, 0],
                  },
                ],
                ix: 2,
                l: 2,
              },
              a: {
                a: 0,
                k: [0, 0, 0],
                ix: 1,
                l: 2,
              },
              s: {
                a: 1,
                k: [
                  {
                    i: {
                      x: [0.667, 0.667, 0.667],
                      y: [1, 1, 1],
                    },
                    o: {
                      x: [0.333, 0.333, 0.333],
                      y: [0, 0, 0],
                    },
                    t: 0,
                    s: [100, 100, 100],
                  },
                  {
                    i: {
                      x: [0.667, 0.667, 0.667],
                      y: [1, 1, 1],
                    },
                    o: {
                      x: [0.333, 0.333, 0.333],
                      y: [0, 0, 0],
                    },
                    t: 9,
                    s: [90, 90, 100],
                  },
                  {
                    i: {
                      x: [0.667, 0.667, 0.667],
                      y: [1, 1, 1],
                    },
                    o: {
                      x: [0.333, 0.333, 0.333],
                      y: [0, 0, 0],
                    },
                    t: 18,
                    s: [100, 100, 100],
                  },
                  {
                    i: {
                      x: [0.667, 0.667, 0.667],
                      y: [1, 1, 1],
                    },
                    o: {
                      x: [0.333, 0.333, 0.333],
                      y: [0, 0, 0],
                    },
                    t: 27,
                    s: [90, 90, 100],
                  },
                  {
                    t: 36,
                    s: [100, 100, 100],
                  },
                ],
                ix: 6,
                l: 2,
              },
            },
            ao: 0,
            ip: 0,
            op: 145,
            st: 0,
            bm: 0,
          },
          {
            ddd: 0,
            ind: 2,
            ty: 2,
            nm: "hand.png",
            cl: "png",
            parent: 1,
            refId: "image_0",
            sr: 1,
            ks: {
              o: {
                a: 0,
                k: 100,
                ix: 11,
              },
              r: {
                a: 0,
                k: 0,
                ix: 10,
              },
              p: {
                a: 0,
                k: [0, 0, 0],
                ix: 2,
                l: 2,
              },
              a: {
                a: 0,
                k: [75, 75, 0],
                ix: 1,
                l: 2,
              },
              s: {
                a: 0,
                k: [100, 100, 100],
                ix: 6,
                l: 2,
              },
            },
            ao: 0,
            ip: 0,
            op: 145,
            st: 0,
            bm: 0,
          },
        ],
        markers: [],
      },
    })
  },
}
</script>
<style lang="scss" scoped>
.demo14 {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 200px;
}
.button_1 {
  width: 750px;
  height: 270px;
  position: relative;
}
      
.hand_1{
  width: 150px;
  height: 150px;
  position: absolute;
  top: 320px;
  right: 40px;
}
     

</style>
