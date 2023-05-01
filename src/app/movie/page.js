
import MovieCard from "@/app/components/MovieCard";
import styles from "@/app/styles/common.module.css"
import SearchBar from "@/app/components/SearchBar";

const Movie = async () => {

    await new Promise(resolve => setTimeout(resolve, 2000));

    const queryString ='money';
    const limit_titles =50;

    const url =`https://netflix54.p.rapidapi.com/search/?query=${queryString}&offset=0&limit_titles=${limit_titles}&limit_suggestions=20&lang=en` ;

    const options = {
        method: 'GET',
        headers: {
            'content-type': 'application/octet-stream',
            'X-RapidAPI-Key':process.env.RAPID_KEY,
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };

    const res = await fetch(url, options);
    const data = await res.json();
    const main_data = data.titles;
     console.log(main_data.jawSummary)

    return (
        <>
            <section className={styles.movieSection}>
                <SearchBar/>
                <div className={styles.container}>
                    <h1>Series & Movie</h1>
                    <div className={styles.card_section}>
                        {
                            main_data.map((curElem) => {
                                return <MovieCard key={curElem.id} {...curElem} />
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Movie;