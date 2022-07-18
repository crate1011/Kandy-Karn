import { useState } from "react"
import { FindKandy } from "./FindKandy"
import { KandySearch } from "./KandySearch"

export const KandyContainer = () => {
    const [searchTerms, setSearchTerms] = useState()

    return <>
    <KandySearch setterFunction={setSearchTerms} />
	<FindKandy searchTermState={searchTerms} />
    </>
}