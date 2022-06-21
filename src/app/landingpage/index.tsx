import clsx from 'clsx'

import style from './css.module.scss'
import Icons from 'assets/icons'
import Button from 'components/button'
import PopupButton from 'components/popup/button'
import ProjectItem from 'assets/data/project-item.json'

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
			<section className={style.skill}>
				<div className={style.title}>
					What Skills I Have
					<span>My Experience</span>
				</div>
				<div className={clsx('container', style.content)}>
					<div className='col-6'>
						<div className={style.wrapper}>
							<div className={style.title}>Frontend Developer</div>
							<div className={clsx(style.wrapper, 'container')}>
								<Item>HTML</Item>
								<Item>CSS</Item>
								<Item>Javascript</Item>
								<Item>React</Item>
								<Item>Boostrap</Item>
								<Item>Redux</Item>
								<Item>SCSS</Item>
								<Item>Typescript</Item>
							</div>
						</div>
					</div>
					<div className='col-6'>
						<div className={style.wrapper}>
							<div className={style.title}>Backend Developer</div>
						</div>
					</div>
				</div>
			</section>
			<section className={clsx(style.project, 'container')}>
				<div className={style.title}>
					What Projects I Have
					<span>My Experience</span>
				</div>
				<div className={style.content}>
					{ProjectItem.map((item) => {
						return (
							<div className='col-4' key={item.id}>
								<div className={style.wrapper}>
									<div className={style.img}>
										<img
											src={require(`assets/img/${item.img}`)}
											alt='error png'
										/>
									</div>
									<h3>{item.name}</h3>
									<div className={style.description}>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Pharetra, hendrerit.
									</div>
									<div className={style.btn}>
										<a href={item.path}>
											<Button color='black'>Visit</Button>
										</a>
									</div>
								</div>
							</div>
						)
					})}
				</div>
			</section>
		</>
	)
}
interface ItemProps {
	children: string
}
const Item = ({ children }: ItemProps) => {
	return (
		<div className='col-6'>
			<div className={style.item}>
				<div className={style.icon}>
					<Icons.CheckMark height={'16'} />
				</div>
				<div className={style.content}>
					<div className={style.name}>{children}</div>
					<div className={style.level}>Experience</div>
				</div>
			</div>
		</div>
	)
}
export default LandingPage
