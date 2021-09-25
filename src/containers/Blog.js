// Packages
import { useState, useEffect } from "react";
import axios from "axios";

// Components
import LoaderFullScreen from "../components/Utility/LoaderFullScreen";
import Footer from "../components/Footer";
import image from "../assets/img/white-background.png";
import BlogModal from "../components/Blog/BlogModal";

const Blog = () => {
  // States
  const [isLoading, setIsLoading] = useState(true);
  const [picker, setPicker] = useState("articles");
  const [modal, setModal] = useState(false);
  const [modalInfo, setModalInfo] = useState();
  const [data, setData] = useState();
  const [data2, setData2] = useState([
    "Main Tutorial",
    "Tutorial 2",
    "Tutorial 3",
    "Tutorial 4",
    "Tutorial 5",
    "Tutorial 6",
    "Tutorial 7",
    "Tutorial 8",
    "Tutorial 9",
    "Tutorial 10",
    "Tutorial 11",
    "Tutorial 12",
  ]);

  const comparisonData = [0, 1, 2, 3, 4, 5];

  // Get Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://itrsq.herokuapp.com/articles`
        );

        setData(response.data);
        console.log(response.data);
        console.log(response.data[0].title);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  // Modal Function
  const modalHandle = (props) => {
    setModalInfo(props.info);
    setModal(true);
  };

  return isLoading ? (
    <LoaderFullScreen />
  ) : (
    <div className="blog bg-gradient-orange">
      <div className="blog__container">
        {modal ? (
          <BlogModal setModal={setModal} modalInfo={modalInfo} />
        ) : (
          <>
            <div className="blog__picker">
              <button
                className={
                  picker === "articles"
                    ? "txt-header-medium-white blog__buttons"
                    : "txt-header-medium-white blog__buttons__clicked"
                }
                onClick={() => setPicker("articles")}
              >
                Articles
              </button>
              <button
                className={
                  picker === "tutorials"
                    ? "txt-header-medium-white blog__buttons"
                    : "txt-header-medium-white blog__buttons__clicked"
                }
                onClick={() => setPicker("tutorials")}
              >
                Tutorials
              </button>
            </div>
            {picker === "articles" && (
              <div className="blog__content">
                <div onClick={() => modalHandle({ info: data[0] })}>
                  <img src={data[0].picture} alt={data[0].picture} />
                  <div>
                    <h1 className="txt-header-small-white">{data[0].title}</h1>
                    <p className="txt-description-small-white blog__description">
                      {data[0].text}
                    </p>
                  </div>
                </div>
                <div>
                  <div onClick={() => modalHandle({ info: data[1] })}>
                    <h1 className="txt-header-small-white">{data[1].title}</h1>
                    <p className="txt-description-small-white blog__description">
                      {data[1].text}
                    </p>
                  </div>
                  {/* <div>
                    <h1 className="txt-header-small-white">{data[2].title}</h1>
                    <p className="txt-description-small-white blog__description">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Quasi nostrum labore, et unde dolor repellat impedit culpa
                      quod, quisquam pariatur dolore rerum repellendus numquam
                      doloremque voluptatum magnam voluptas ex facilis. Odio
                      error ratione quisquam, dignissimos, dolorum nisi quas
                      dolor nobis adipisci necessitatibus voluptates, facere in
                      cum consectetur reprehenderit sed nostrum.
                    </p>
                  </div>
                  <div>
                    <h1 className="txt-header-small-white">{data[3].title}</h1>
                    <p className="txt-description-small-white blog__description">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Quasi nostrum labore, et unde dolor repellat impedit culpa
                      quod, quisquam pariatur dolore rerum repellendus numquam
                      doloremque voluptatum magnam voluptas ex facilis. Odio
                      error ratione quisquam, dignissimos, dolorum nisi quas
                      dolor nobis adipisci necessitatibus voluptates, facere in
                      cum consectetur reprehenderit sed nostrum.
                    </p>
                  </div>
                </div>
                <div>
                  {" "}
                  <img src={image} alt={image} />
                  <div>
                    <h1 className="txt-header-small-white">{data[4].title}</h1>
                    <p className="txt-description-small-white blog__description">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Illo voluptatum ullam saepe nostrum quas explicabo quo
                      exercitationem, debitis, assumenda atque ex libero vel?
                      Repudiandae dolorum provident nostrum, id asperiores
                      labore molestiae expedita, consequatur alias qui, dicta
                      fuga odio adipisci? At dolorem vitae quasi voluptas atque
                      cum veritatis? Laborum, veniam nemo sequi, culpa incidunt
                      aliquid natus iure ex dolores ea nihil placeat tempore
                      corporis itaque dicta at voluptatem fugiat tempora
                      adipisci mollitia repellat ipsum. Id voluptatum nisi fugit
                      ratione quae at architecto ad necessitatibus totam
                      sapiente temporibus deleniti officia quod dolorum, iure
                      odio commodi laudantium repellendus, nobis iusto
                      voluptatem ea reprehenderit.
                    </p>
                  </div>
                </div>
                <div>
                  {" "}
                  <img src={image} alt={image} />
                  <div>
                    <h1 className="txt-header-small-white">{data[5].title}</h1>
                    <p className="txt-description-small-white blog__description">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Illo voluptatum ullam saepe nostrum quas explicabo quo
                      exercitationem, debitis, assumenda atque ex libero vel?
                      Repudiandae dolorum provident nostrum, id asperiores
                      labore molestiae expedita, consequatur alias qui, dicta
                      fuga odio adipisci? At dolorem vitae quasi voluptas atque
                      cum veritatis? Laborum, veniam nemo sequi, culpa incidunt
                      aliquid natus iure ex dolores ea nihil placeat tempore
                      corporis itaque dicta at voluptatem fugiat tempora
                      adipisci mollitia repellat ipsum. Id voluptatum nisi fugit
                      ratione quae at architecto ad necessitatibus totam
                      sapiente temporibus deleniti officia quod dolorum, iure
                      odio commodi laudantium repellendus, nobis iusto
                      voluptatem ea reprehenderit.
                    </p>
                  </div> */}
                </div>
                {/* <div className="blog__content__rest">
                  {data.map((article, index) => {
                    return (
                      comparisonData.indexOf(data.indexOf(article)) === -1 && (
                        <div
                          className="blog__smallContent"
                          key={article}
                          onClick={() => modalHandle({ info: article })}
                        >
                          <img src={image} alt={image} />
                          <h1 className="txt-header-small-white">{article}</h1>
                          <p className="txt-description-small-white blog__description">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Recusandae optio, culpa neque voluptatum
                            libero rerum aut quae ea veniam suscipit repellat
                            distinctio iusto facere provident maiores et saepe?
                            Laudantium, maiores!
                          </p>
                        </div>
                      )
                    );
                  })}
                </div> */}
              </div>
            )}
            {picker === "tutorials" && (
              <div className="blog__content__tutorials">
                <h1 className="txt-header-large-grey">COMING SOON</h1>
                {/* {data2.map((tutorial, index) => {
                  return (
                    <div
                      className="blog__smallContent"
                      key={tutorial}
                      onClick={() => modalHandle({ info: tutorial })}
                    >
                      <img src={image} alt={image} />
                      <h1 className="txt-header-small-white">{tutorial}</h1>
                      <p className="txt-description-small-white blog__description">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Recusandae optio, culpa neque voluptatum libero
                        rerum aut quae ea veniam suscipit repellat distinctio
                        iusto facere provident maiores et saepe? Laudantium,
                        maiores!
                      </p>
                    </div>
                  );
                })} */}
              </div>
            )}
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};
export default Blog;