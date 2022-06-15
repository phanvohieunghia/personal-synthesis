import React, { useEffect, useRef, useState } from 'react'

import style from './css.module.scss'
import { useDebounce } from 'hooks'
import Icons from 'assets/icons'

const Search = () => {
	const searchRef = useRef(null)
	const [searchValue, setSearchValue] = useState('')
	const debounce = useDebounce(searchValue, 500)

	const handleFocusInput = () => {
		searchRef.current.style.borderColor = '#000'
	}
	const handleBlurInput = () => {
		searchRef.current.style.borderColor = '#ccc'
	}
	useEffect(() => {
		if (!!searchValue) {
			searchRef.current.children[1].style.fill = '#000'
		} else {
			searchRef.current.children[1].style.fill = '#ccc'
		}
	}, [searchValue])
	useEffect(() => {
		if (!debounce.trim()) {
			return
		}
	}, [debounce])

	return (
		<div className={style.search} ref={searchRef}>
			<input
				type='text'
				placeholder='search'
				value={searchValue}
				onChange={(e) => setSearchValue(e.target.value)}
				onFocus={handleFocusInput}
				onBlur={handleBlurInput}
			/>
			<div className={style.icon}>
				<Icons.Search height={'20'} />
			</div>
		</div>
	)
}

export default Search
