import "./Movies.css"
import Movie from "./Movie";
function Movies() {
  let movieLinks=["https://occ-0-2663-2164.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABelym3oizsPRmzalSCHLzlUvCg5_t7nQrftI9vcfrm1fNMvrYtAQXucOo7F7aYgdinQ-eiH3vvXGxj3E2AEYxGj3T6dh8UC2foOVddUaNSwF3MNa1I-wk_TWGRmyVL1p8L4cjdY9whYqsxJ_2JnPH6QRhJkWe2uHGO7RNB_wiaLYVNTIQlRFTaBl1BUoO0LKENl6EZMdbqf_8Z2qmPgDuU2ZZUYgpB-KXBtC-4cQORzai1L_jNnf7TQ7VUz_LyhPgCWIqWMz86aOi7OVL_vx_g9TGw-yI8U8zqrMGvtWJDpv5zpulrdsAh4EbXVml4V2dXI8F5CCSlk9loLhb9V70wCZUVIQ1H0fcnOakaSplWJ9Dw.jpg?r=cf9",
  "https://occ-0-2663-2164.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABeAL4BFPrmyexJhCaB9PTQ8NDULI08FmUpvcWm1Zl3refH5SYoGMLMN8oDB1ZRCNuORQQaE-VC8FaUL2qBqUNfhZsnKTnXkWoM5EKqb43Um8POUoJ20OLIv5kkJ2dw28yULr4SD-JaBBLu2nVYehgT4Q_zslKDoFlRpefsMzBAACgILZtv4pI-7epksKuXB2qdNXYIkfJowQvB9B7cTpaByN1s1UCxhdlGntYR51jLQSMUVSNF_Op-by0t5o2YTnoweS8shv80yjaaBzkEeAyLRtE2_8oE1a1-X5AxPWCAVPrshNX17zTDl8iaNhpqlPi2m8ergA1ZVN5ZGrYhGdDGZXcjgIfCGpRpa-n4YPT43Ln7QzVq0.jpg?r=09b",
  "https://occ-0-2663-2164.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABW0CdL7BuY0VTI81TjA2iMRBryIJt2mUIsehZnbVH_AlD0DAXB5kE9-RJ9f-at0-SPB4PA8QbonFUC3eA-ND3puHO2m-7pab-mCDUA1QTbPbw89q3EkQfjcY9M4NM0rZEnGE.jpg?r=4f5",
  "https://occ-0-2663-2164.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABb9N-Q1vFj3X4mVXZ5UgMCM3LaW5_RFK-tOmLc8D0fPnwwilSGZK1mSvnByWCMMzRRcY1Y-PVWGA5UWQrGSwFgjIC5F7_7kV7LuVe30bCiMfuuun4XqvQXs7RpLN-fJ3DUWt.jpg?r=501",
  "https://occ-0-2663-2164.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABVCv4yWZncknTfl2xBuxumpRupouujgaPP6WyW4SKlKW4ca5zcmfhKPeuawwDGILSJ2qg0wpSbTi55egpBHiVpiLFnhxZfcKX7LSA1gC7OM9qpj06RqN3lq8VAnazeKuNq2v.jpg?r=326"
  ]
  let titles=["Formula 1: Drive to Survive",
  "Avatar The Last Airbender",
  "Unicorn Academy",
  "Lucifer",
  "Money Heist"
  ]
  return (
    <div className="movies">
      {
        movieLinks.map((links,index)=>
        (
          <Movie link={links} title={titles[index]} key={index}/>
        ))
      }
    </div>

    // <div className="movies">
    //   <Movie link={movieLinks[0]} title={titles[0]}/>
    //   <Movie link={movieLinks[1]} title={titles[1]}/>
    //   <Movie link={movieLinks[2]} title={titles[2]}/>
    //   <Movie link={movieLinks[3]} title={titles[3]}/>
    //   <Movie link={movieLinks[4]} title={titles[4]}/>
    // </div>
  );
}
export default Movies;
