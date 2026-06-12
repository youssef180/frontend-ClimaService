import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Home = () => {
	const services = [
		{
			title: "Climatiseur Sale",
			desc: "Buy high quality air conditioners at the best price.",
			image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789",
		},
		{
			title: "Repair Service",
			desc: "Fast and professional AC repair service.",
			image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4",
		},
		{
			title: "Installation",
			desc: "Professional installation for homes and companies.",
			image: "https://images.unsplash.com/photo-1558002038-1055907df827",
		},
	];

	return (
		<div>
			{/* HERO SECTION */}
			<section className='hero-section'>
				<div className='hero-content'>
					<h1>
						<span className='blue-text'>Cool Your</span>{" "}
						<span className='orange-text'>World</span>
					</h1>

					<p>
						Professional air conditioner sales, repair and installation
						services.
					</p>

					<Button className='hero-btn'>Explore Products</Button>
				</div>
			</section>

			{/* CAROUSEL */}
			<div className='carousel-container'>
				<Carousel>
					<Carousel.Item>
						<img
							className='carousel-image'
							src='https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1600&auto=format&fit=crop'
							alt='Modern cooling'
						/>
						<Carousel.Caption>
							<h3>Modern Cooling Systems</h3>
							<p>Energy-efficient air conditioners.</p>
						</Carousel.Caption>
					</Carousel.Item>

					<Carousel.Item>
						<img
							className='carousel-image'
							src='https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1600&auto=format&fit=crop'
							alt='Maintenance'
						/>
						<Carousel.Caption>
							<h3>Maintenance & Repair</h3>
							<p>Keep your AC working perfectly.</p>
						</Carousel.Caption>
					</Carousel.Item>

					<Carousel.Item>
						<img
							className='carousel-image'
							src='https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop'
							alt='Technician'
						/>
						<Carousel.Caption>
							<h3>Trusted Technicians</h3>
							<p>Professional installation with guaranteed quality.</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</div>
			{/* SERVICES */}
			<section className='services-section'>
				<h2>
					<span className='blue-text'>Our</span>{" "}
					<span className='orange-text'>Services</span>
				</h2>

				<div className='services-container'>
					{services.map((service, i) => (
						<Card key={i} className='service-card'>
							<Card.Img
								variant='top'
								src={service.image}
								className='service-img'
							/>

							<Card.Body>
								<Card.Title>{service.title}</Card.Title>

								<Card.Text>{service.desc}</Card.Text>

								<Button className='service-btn'>Learn More</Button>
							</Card.Body>
						</Card>
					))}
				</div>
			</section>

			{/* FOOTER */}
			<footer className='footer'>
				<h3>ClimaService</h3>

				<p>Professional air conditioning solutions.</p>

				<div className='footer-links'>
					<a href='https://facebook.com'>📘 Facebook</a>
					<a href='https://whatsapp.com'>📱 WhatsApp</a>
					<a href='https://gmail.com'>📧 Email</a>
					<a href='https://tal.com'>📞 +216 00 000 000</a>
				</div>

				<p className='copyright'>© 2026 ClimaService. All Rights Reserved.</p>
			</footer>
		</div>
	);
};

export default Home;
