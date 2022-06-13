import clsx from 'clsx'

import style from './css.module.scss'
import Icons from 'assets/icons'
import Button from 'components/button'
import PopupButton from 'components/popup/button'

const LandingPage = () => {
	return (
		<>
			<section className={style.banner}>
				<div className={style.center}></div>
				<div className={style.content}>
					<h2>Hello, I'm</h2>
					<h3>Phan Võ Hiếu Nghĩa</h3>
					<h2>Front-end Developer</h2>
					<div className={style.contact}>
						<a href='https://www.facebook.com/phanvohieunghia/'>
							<Icons.Contact.Facebook height={'40px'} />
						</a>
						<a href='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=phvohieunghia@gmail.com'>
							<Icons.Contact.Google height={'40px'} />
						</a>
						<a href='https://github.com/phvohieunghia'>
							<Icons.Contact.Github height={'40px'} />
						</a>
						<a href='https://www.linkedin.com/in/phvohieunghia/'>
							<Icons.Contact.LinkedIn height={'40px'} />
						</a>
					</div>
				</div>
			</section>
			<section className={clsx(style.about, 'container')}>
				<div className={clsx(style.img, 'col-6 col-sm-12')}>
					<img src={require('assets/img/loading.png')} alt='error png' />
				</div>
				<div className={clsx(style.content, 'col-6 col-sm-12')}>
					<h3>About Me</h3>
					<h4>Who Am I</h4>
					<div className={style.description}>Hello</div>
					<Button color='black'>Get My Portfolio</Button>
					<Button>
						<PopupButton />
						Get My Portfolio
					</Button>
				</div>
			</section>
			<section className={clsx(style.project, 'container')}>
				<div className='col-4'>
					<div className={style.wrapper}>
						<div className={style.img}>
							<img src={require('assets/img/item.png')} alt='error png' />
						</div>
						<h3>WebDeveloper</h3>
						<div className={style.description}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra,
							hendrerit.
						</div>
						<div className={style.btn}>
							<Button color='black'>Detail</Button>
							<Button>Michael</Button>
						</div>
					</div>
				</div>
				<div className='col-4'>
					<div className={style.wrapper}>
						<div className={style.img}>
							<img src={require('assets/img/item.png')} alt='error png' />
						</div>
						<h3>WebDeveloper</h3>
						<div className={style.description}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra,
							hendrerit.
						</div>
						<div className={style.btn}>
							<Button color='black'>Detail</Button>
							<Button>Michael</Button>
						</div>
					</div>
				</div>
				<div className='col-4'>
					<div className={style.wrapper}>
						<div className={style.img}>
							<img src={require('assets/img/item.png')} alt='error png' />
						</div>
						<h3>WebDeveloper</h3>
						<div className={style.description}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra,
							hendrerit.
						</div>
						<div className={style.btn}>
							<Button color='black'>Detail</Button>
							<Button>Michael</Button>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default LandingPage
