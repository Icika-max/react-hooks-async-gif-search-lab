function GifList({ data, alt }) {
    const allData = data.data;
    // const singleData = allData.map((item) => {
    //   return (
    //     <div>
    //       <img src={item.images.original.url} />
    //     </div>
    //   );
    // });
    return (
      <>
        {allData?.map((item, index) => {
          return (
            <ul key={index}>
              <li>
                <img src={item.images.original.url} alt={alt} />
              </li>
            </ul>
          );
        })}
      </>
    );
  }
  
  export default GifList;