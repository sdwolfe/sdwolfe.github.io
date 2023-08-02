
import Image from 'next/image'
import { BookCard } from '../components/SiteContent/BookCard'

export default function Buecher(){


    const books = [
        {
            coverImage:"/images/marla_1_das_erwachen.jpg",
            bookTitle: "Das Erwachen",
            bookDescription: "Eine tödliche Gefahr beendet das friedliche Leben der Grafentochter Marla abrupt und \
            zwingt sie, in die verborgene Welt der Alben zu fliehen. Hier erkennt sie schnell, wie wenig sie über ihre \
            eigenen albischen Wurzeln weiß. Die jahrhundertelangen kriegerischen Auseinandersetzungen zwischen Menschen, \
            Alben und Drachen reißen Marla in einen Strudel aus Ereignissen. Was hat es mit ihrer Begabung auf sich, mit \
            Tieren kommunizieren zu können? Und wird es ihr gelingen, die auferlegten Fesseln ihres Standes und ihrer \
            menschlichen Erziehung zu sprengen und sich neu zu definieren?",
        },
        {
            coverImage:"/images/marla_2_das_erbe.jpg",
            bookTitle: "Das Erbe",
            bookDescription: "Die Abenteuer der jungen Halbalbe Marla gehen weiter: Als die albischen Widerstandskämpfer \
            erfahren, dass sich ein Drache in höchster Not befindet, begeben sich Marla und ihre Gefährten auf die \
            gefährliche Reise zum Drachenvolk. Dabei gerät Marla selbst in die Fänge des Feindes und entwickelt einen \
            riskanten Plan. Wird es ihr gelingen, sich aus ihrer bedrohlichen Lage zu befreien und dabei das Leben ihrer \
            Freunde zu schützen? Und wird sie sich tatsächlich als eine der letzten Auserwählten unter Beweis stellen \
            können? Plötzlich hängt alles von ihr ab.",
        },
        {
            coverImage:"/images/marla_2_das_erbe.jpg",
            bookTitle: "Das Erbe",
            bookDescription: "Die Abenteuer der jungen Halbalbe Marla gehen weiter: Als die albischen Widerstandskämpfer \
            erfahren, dass sich ein Drache in höchster Not befindet, begeben sich Marla und ihre Gefährten auf die \
            gefährliche Reise zum Drachenvolk. Dabei gerät Marla selbst in die Fänge des Feindes und entwickelt einen \
            riskanten Plan. Wird es ihr gelingen, sich aus ihrer bedrohlichen Lage zu befreien und dabei das Leben ihrer \
            Freunde zu schützen? Und wird sie sich tatsächlich als eine der letzten Auserwählten unter Beweis stellen \
            können? Plötzlich hängt alles von ihr ab.",
        },
    ]


    return (
        <div className=' mb-24'>

            { books.map((book) => {
                return(
                    <BookCard book={book} /> 
                )
            })}

        </div>
    )
}