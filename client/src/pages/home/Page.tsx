function Page() {
  return (
    <div className="Home-Page">
      <div className="navmain">
        <div className="logo">
          <img src="./logo.svg" alt="logo" />
        </div>
        <div className="quote">
          Discover your perfect rental apartment with our advanced search
        </div>
        <div className="buttons">
          <button className="signin">Signin</button>
          <button className="signup">Signup</button>
        </div>
      </div>
      <div className="home-main-sec-1"> 
      <div className="home-main-sec-1-content">
        <h3>Start your journey to finding the perfect place to call home</h3>
        <h5>Explore our wide range of rental properties tailored to fit your lifestyle and needs!</h5>
         <div className="sec-1-content-search">
          <input  type="text" placeholder="Search by city,neighborhood or address" />
           <button type="submit">Search</button> 
          </div> 
      </div>
      </div>
      <div className="home-main-sec-2"> 
      Section 2
      </div>
      <div className="home-main-sec-3"> 
      Section 3
      </div>
      <div className="home-main-sec-4"> 
      Section 4
      </div>
    </div>
  );
}

export default Page;
