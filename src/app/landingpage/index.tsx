import clsx from 'clsx'

import style from './css.module.scss'
import Icons from 'assets/icons'
import Button from 'components/button'
import ProjectItem from 'assets/data/project-item.json'
import ExperienceData from 'assets/data/experience.json'
import myCV from 'assets/data/mycv.pdf'
import ScrollView from 'components/scrollview'

const LandingPage = () => {
	return (
		<ScrollView>
			<section className={style.banner}>
				<div className={style.center}></div>
				<div className={style.content}>
					<h2>Hello, I'm</h2>
					<h3>Phan Võ Hiếu Nghĩa</h3>
					<h2>Front-end Developer</h2>
					<div className={style.contact}>
						<a
							target='_blank'
							rel='noreferrer'
							href='https://www.facebook.com/phanvohieunghia/'>
							<Icons.Facebook height={'40px'} />
						</a>
						<a
							target='_blank'
							rel='noreferrer'
							href='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=phvohieunghia@gmail.com'>
							<Icons.Google height={'40px'} />
						</a>
						<a
							target='_blank'
							rel='noreferrer'
							href='https://github.com/phvohieunghia'>
							<Icons.Github height={'40px'} />
						</a>
						<a
							target='_blank'
							rel='noreferrer'
							href='https://www.linkedin.com/in/phvohieunghia/'>
							<Icons.LinkedIn height={'40px'} />
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
					<div className={style.description}>
						I have the desire to become front-end developer. I'm passionate
						about building excellent website that improves the lives of those
						around me.
					</div>
					<Button path={myCV}>Get My CV</Button>
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
								{ExperienceData.frontend.map((item, i) => {
									return <Item data={item} key={i} />
								})}
							</div>
						</div>
					</div>
					<div className='col-6'>
						<div className={style.wrapper} style={{ height: '100%' }}>
							<div className={style.title}>Backend Developer</div>
						</div>
					</div>
				</div>
			</section>
			<section className={clsx(style.project, 'container')}>
				<div className={style.title}>
					My current work
					<span>Portfolio</span>
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
										<Button path={item.path_github}>Github</Button>
										<Button color='black' path={item.path_demo}>
											Demo
										</Button>
									</div>
								</div>
							</div>
						)
					})}
				</div>
			</section>
		</ScrollView>
	)
}
interface ItemProps {
	data: {
		name: string
		level: string
	}
}
const Item = ({ data }: ItemProps) => {
	return (
		<div className='col-6'>
			<div className={style.item}>
				<div className={style.icon}>
					<Icons.CheckMark height={'16'} />
				</div>
				<div className={style.content}>
					<div className={style.name}>{data.name}</div>
					<div className={style.level}>{data.level}</div>
				</div>
			</div>
		</div>
	)
}
export default LandingPage
