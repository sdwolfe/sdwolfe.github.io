
export default function Impressum(){
    return (

        <div className="text-center w-80 mx-auto mt-10">

            <p className="text-3xl font-semibold">Impressum</p>
            <p className="">Angaben gemäß § 5 TMG:</p>

            <p className="text-l font-semibold pt-4">Verantwortliche</p>
            <p className="">
                <p>Simone Wolfe</p>
                <p>c/o autorenglück.de</p>
                <p>Franz-Mehring-Str. 15</p>
                <p>01237 Dresden</p>
            </p>

            <p className="text-l font-semibold pt-4">Email</p>
            <a className=" text-teal-700 hover:underline hover:opacity-80" href="mailto:autorin@simonewolfe.de">autorin@simonewolfe.de</a>

            <p className="text-l font-semibold pt-4">EU-Streitschlichtung</p>
            <p className="">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: &nbsp;
                <a className=" text-teal-700 hover:underline hover:opacity-80" href="https://www.ec.europa.eu/consumers/odr">https://www.ec.europa.eu/consumers/odr</a>.
                Meine E-Mail-Adresse finden Sie oben im Impressum.
            </p>

        </div>
    )
}