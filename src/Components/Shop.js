function Shop({data}) {
    const imagesArr = ["https://i.pinimg.com/originals/0a/d3/0e/0ad30e4a1c4db15adbd648fd161111fd.png","https://www.pngall.com/wp-content/uploads/5/Christmas-Tree-Gift.png",
        "https://www.pngall.com/wp-content/uploads/5/Merry-Christmas-Tree.png","https://www.cppng.com/file/download/2020-06/30439-7-christmas-tree-transparent.png",
        "https://www.freeiconspng.com/uploads/x-mas-christmas-tree-transparent-31.png",
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/14b64b63-ffe0-458a-bcc1-bc0130d53168/d866qhp-727efd20-e86f-4035-a7e7-59c9548f542a.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzE0YjY0YjYzLWZmZTAtNDU4YS1iY2MxLWJjMDEzMGQ1MzE2OFwvZDg2NnFocC03MjdlZmQyMC1lODZmLTQwMzUtYTdlNy01OWM5NTQ4ZjU0MmEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.1ibsI8_Own3P9b5mMvb4x9QhFTyL6gzXv8QSvET5abI"
    ]
    return (
        <div className='boxShop d-flex wrap justify-center align-center'>
            <div className="d-flex column justify-center align-center">
                <img className="itemImg"
                     src={imagesArr[0]} alt=""/>
                <p>Price: 70</p>
                <button className="buyBtn"
                        onClick={() => data(70, imagesArr[0])}>Buy
                </button>
            </div>
            <div className="d-flex column justify-center align-center">
                <img className="itemImg"
                     src={imagesArr[1]} alt=""/>
                <p>Price: 90</p>
                <button className="buyBtn"
                        onClick={() => data(70, imagesArr[1])}>Buy
                </button>
            </div>
            <div className="d-flex column justify-center align-center">
                <img className="itemImg"
                     src={imagesArr[2]} alt=""/>
                <p>Price: 60</p>
                <button className="buyBtn"
                        onClick={() => data(70, imagesArr[2])}>Buy
                </button>
            </div>
            <div className="d-flex column justify-center align-center">
                <img className="itemImg"
                     src={imagesArr[3]} alt=""/>
                <p>Price: 120</p>
                <button className="buyBtn"
                        onClick={() => data(70, imagesArr[3])}>Buy
                </button>
            </div>
            <div className="d-flex column justify-center align-center">
                <img className="itemImg"
                     src={imagesArr[4]} alt=""/>
                <p>Price: 99</p>
                <button className="buyBtn"
                        onClick={() => data(70, imagesArr[4])}>Buy
                </button>
            </div>
            <div className="d-flex column justify-center align-center">
                <img className="itemImg"
                     src={imagesArr[5]}
                     alt=""/>
                <p>Price: 220</p>
                <button className="buyBtn"
                        onClick={() => data(220, imagesArr[5])}>Buy
                </button>
            </div>
        </div>
    )
}

export default Shop;