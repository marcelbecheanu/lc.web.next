import Link from 'next/link';
import Image from 'next/image';

import bgservices from '@/assets/img/home/bg-services.png';

import img1 from '@/assets/img/home/icons/1.png';
import img2 from '@/assets/img/home/icons/2.png';
import img3 from '@/assets/img/home/icons/3.png';
import img4 from '@/assets/img/home/icons/4.png';
import img5 from '@/assets/img/home/icons/5.png';
import img6 from '@/assets/img/home/icons/6.png';


function Services() {
    return (
        <article className='services'>
            <section>
                <Image src={bgservices} alt="" fill={true} quality={80} placeholder="blur"/>
                <section>
                    <section>
                        <section>
                            <section></section>
                            <h4>NOSSOS SERVIÇOS</h4>
                        </section>
                        <h3>O Melhor Que Podemos <br/> Oferecer</h3>
                        <p>O melhor que podemos oferecer é um compromisso incansável com a excelência em cada aspecto do desenvolvimento web, para fornecer soluções personalizadas e eficazes que ajudem sua empresa a alcançar seus objetivos digitais.</p>
                        <section>
                            <Link href="">SABER MAIS</Link>
                        </section>
                    </section>
                    <section>

                        <section>
                            <section>
                                <Image src={img1} alt="" fill={false} quality={50}/>
                                <h5>Web development</h5>
                            </section>
                        </section>

                        <section>
                            <section>
                                <Image src={img2} alt="" fill={false} quality={50}/>
                                <h5>Web development</h5>
                            </section>
                            <section>
                                <Image src={img3} alt="" fill={false} quality={50}/>
                                <h5>Web development</h5>
                            </section>
                        </section>

                        <section>
                            <section>
                                <Image src={img4} alt="" fill={false} quality={50}/>
                                <h5>Web development</h5>
                            </section>
                            <section>
                                <Image src={img5} alt="" fill={false} quality={50}/>
                                <h5>Web development</h5>
                            </section>
                            <section>
                                <Image src={img6} alt="" fill={false} quality={50}/>
                                <h5>Web development</h5>
                            </section>
                        </section>

                    </section>
                </section>
            </section>
        </article>
    );
}

export default Services;
