import javascript from './Images/javascript.jpg';
import java from './Images/java.jpg';
import php from './Images/php.png';
import python from './Images/python.jpg';
import ruby from './Images/ruby.jpg';
import perl from './Images/perl.png';
import jslogo from './Images/jslogo.jpg';
import javalogo from './Images/javalogo.jpg';
import pythonlogo from './Images/pythonlogo.jpg';
import phplogo from './Images/phplogo.png';
import rubylogo from './Images/rubylogo.png';
import htmlcsslogo from './Images/htmlcsslogo.png';
import perllogo from './Images/perllogo.jpg';
import djangologo from './Images/djangologo.png';


const Sdata = [
    {
        id : 1,
        imgsrc : javascript,
        title : "JavaScript",
        desc : "JavaScript is one of the well accepted and forceful programming languages employed for developing websites. JavaScript is exceptionally useful as this language can vastly aid you in making communication for your website.",
        btnlink : "https://www.javascript.com/",
    },
    {
        id : 2,
        imgsrc : java,
        title : "Java",
        desc : "Java is regarded as the perfect language for web development. At the moment, it is said to be the top most programming language in the industry. Java is a class-based, OOPs language. Java is planned to function across various software platforms including Mac OS X and could on Windows.",
        btnlink : "https://www.oracle.com/in/java/technologies/javase-downloads.html",
    },
    {
        id : 3,
        imgsrc : php,
        title : "PHP",
        desc : "PHP means Hypertext Preprocessor. PHP is one of the most generally used languages for web development. PHP is an HTML-embedded scripting language and it is employed to form dynamic pages promptly. With the assistance of PHP, you can expand a web app very swiftly and easily. PHP is directly fixed into an HTML source is rather than an external file. PHP controls lots of websites that are WordPress, Digg, and Facebook.",
        btnlink : "https://www.php.net/",
    },
    {
        id : 4,
        imgsrc : python,
        title : "Python",
        desc : "It is an advanced, and it is one of the server side scriptings for websites and mobile applications. It backs up many programming paradigms such as OOPs, structured programming, and even functional programming. A lot of web developers are using this language as a result of its flexibility and the broad range of application. Python can effortlessly run on LINUX and Windows based servers.",
        btnlink : "https://www.python.org/",
    },
    {
        id : 5,
        imgsrc : ruby,
        title : "Ruby",
        desc : "Ruby is a powerful and object-oriented scripting for developing a website. It is used for the formation or programming of mobile apps and websites. The language effectively balances vital programming with functional programming and is a greatly scalable language. Ruby is recognized for its simple and effective writable techniques and it is a user-friendly language for beginners.",
        btnlink : "https://www.ruby-lang.org/en/",
    },
    {
        id : 6,
        imgsrc : perl,
        title : "Perl",
        desc : "Perl is a well-acknowledged programming language in the web development field. The language presents unique tools for different vague setbacks such as system programming. It is an interpreted script language and compilable into a dual executable or platform-compatible Bytecode.",
        btnlink : "https://www.perl.org/",
    }
]
const Galdata = [
    {
        id: 1,
        logo: jslogo,
        gal_color: '#fdd835',
        gal_link: 'https://www.javascript.com/',
        gal_title: 'Javascript',
    },
    {
        id: 2,
        logo: javalogo,
        gal_color: '#4dd0e1',
        gal_link: 'https://www.oracle.com/in/java/technologies/javase-downloads.html',
        gal_title: 'Java',
    },
    {
        id: 3,
        logo: pythonlogo,
        gal_color: '#4dd0e1',
        gal_link: 'https://www.python.org/',
        gal_title: 'Python',
    },
    {
        id: 4,
        logo: perllogo,
        gal_color: '#4dd0e1',
        gal_link: 'https://www.perl.org/',
        gal_title: 'Perl',
    },
    {
        id: 5,
        logo: phplogo,
        gal_color: '#311692',
        gal_link: 'https://www.php.net/',
        gal_title: 'PHP',
    },
    {
        id: 6,
        logo: rubylogo,
        gal_color: '#4dd0e1',
        gal_link: 'https://www.ruby-lang.org/en/',
        gal_title: 'Ruby',
    },
    {
        id: 7,
        logo: djangologo,
        gal_color: '#004d40',
        gal_link: 'https://www.djangoproject.com/download/',
        gal_title: 'Django',
    },
    {
        id: 8,
        logo: htmlcsslogo,
        gal_color: '#00bcd4',
        gal_link: 'https://www.w3schools.com/html/',
        gal_title: 'Html & Css',
    },
]

export default Sdata;
export { Galdata };