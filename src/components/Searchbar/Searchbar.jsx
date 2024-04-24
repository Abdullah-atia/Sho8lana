import styles from './Searchbar.module.css'
function Searchbar() {
    return (
        <div className="pt-5">
                  <form>
                    <div className={`${styles.hero}bg-white d-flex position-relative`}>
                      
                      <div className='flex'>
                        <input type="text" className="form-control shadow-none" placeholder=".Search for any service.." />
                        <button className="hero-form-btn position-absolute">
                          <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M18 17L14 13" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                          Search
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
    )
}

export default Searchbar
