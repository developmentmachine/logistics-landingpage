import { useEffect, useState } from "react";
import logisticsFleet from "../resources/1.jpg";
import warehouseScene from "../resources/2.jpg";
import driverScene from "../resources/3.jpg";

const services = [
  {
    number: "01",
    title: "整车干线运输",
    text: "覆盖全国主流干线，适配大宗货物、工厂直发、跨省调拨等高时效运输场景。",
    featured: true,
  },
  {
    number: "02",
    title: "零担与城配",
    text: "灵活拼载与城市配送结合，为中小批量货物提供更具成本效率的履约方式。",
  },
  {
    number: "03",
    title: "仓配一体",
    text: "支持入库、分拣、打包、出库和配送协同，让库存周转与末端交付更顺畅。",
  },
  {
    number: "04",
    title: "项目物流方案",
    text: "针对大型设备、会展物资、季节性峰值订单，提供定制化运输组织与现场协调。",
  },
];

const advantages = [
  ["快", "快速匹配", "基于长期合作线路与车辆资源，快速响应临时发货和计划性运输需求。"],
  ["稳", "稳定履约", "从装车、发运、在途、到达、签收多节点跟进，减少运输过程的不确定性。"],
  ["省", "成本优化", "结合货量、线路、车型和时效要求，帮助客户选择更合理的运输组织方式。"],
  ["安", "安全保障", "承运资质审核、货物装载规范与异常预案并行，守护货物运输安全。"],
];

const processes = [
  ["01", "需求沟通", "明确货物类型、发到城市、时效要求、装卸条件和结算周期。"],
  ["02", "方案报价", "结合线路、车型、货量和服务标准，输出可执行的运输方案。"],
  ["03", "调度执行", "匹配车辆、安排装车、跟进入途节点，保障运输过程可视可控。"],
  ["04", "签收复盘", "完成回单收集、对账结算和异常复盘，持续优化后续合作。"],
];

const navItems = [
  ["#services", "服务能力"],
  ["#advantages", "核心优势"],
  ["#network", "运输资源"],
  ["#process", "合作流程"],
];

function Brand({ footer = false }) {
  return (
    <a className={`brand ${footer ? "footer-brand" : ""}`} href="#top" aria-label="运满物流首页">
      <span className="brand-mark">运</span>
      <span>
        <strong>运满物流</strong>
        <small>Yunman Logistics</small>
      </span>
    </a>
  );
}

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-open", isOpen);
    return () => document.body.classList.remove("nav-open");
  }, [isOpen]);

  return (
    <header className={`site-header ${isScrolled ? "is-scrolled" : ""} ${isOpen ? "is-open" : ""}`} id="top">
      <nav className="navbar" aria-label="主导航">
        <Brand />
        <button
          className="nav-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="navMenu"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
          <span className="sr-only">打开导航</span>
        </button>

        <div className="nav-menu" id="navMenu">
          {navItems.map(([href, label]) => (
            <a href={href} key={href} onClick={() => setIsOpen(false)}>
              {label}
            </a>
          ))}
          <a className="nav-cta" href="#contact" onClick={() => setIsOpen(false)}>
            获取方案
          </a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero section-dark">
      <div className="hero-bg" aria-hidden="true"></div>
      <div className="hero-overlay" aria-hidden="true"></div>
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">全国运输 · 仓配一体 · 项目物流</p>
          <h1>让每一程运输更稳、更快、更省心</h1>
          <p className="hero-lead">
            运满物流为制造、商贸、电商和连锁企业提供覆盖全国的综合物流解决方案，
            以稳定车源、智能调度和全程可视化，保障货物准时、安全抵达。
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#contact">
              立即获取物流方案
            </a>
            <a className="btn btn-ghost" href="#services">
              查看服务能力
            </a>
          </div>
          <div className="hero-trust" aria-label="服务承诺">
            <span>24小时响应</span>
            <span>全程跟踪</span>
            <span>异常快速处理</span>
          </div>
        </div>

        <aside className="hero-card" aria-label="运满物流运营看板">
          <div className="card-header">
            <span className="status-dot"></span>
            <span>今日运输态势</span>
          </div>
          <div className="dispatch-map">
            <span className="route route-one"></span>
            <span className="route route-two"></span>
            <span className="hub hub-a">华北</span>
            <span className="hub hub-b">华东</span>
            <span className="hub hub-c">华南</span>
            <span className="hub hub-d">西南</span>
          </div>
          <div className="dispatch-list">
            <div>
              <strong>98.7%</strong>
              <span>准点履约率</span>
            </div>
            <div>
              <strong>300+</strong>
              <span>合作线路</span>
            </div>
            <div>
              <strong>8,000+</strong>
              <span>可调度车辆</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="stats-bar" aria-label="运满物流关键数据">
      <div className="container stats-grid">
        {[
          ["31", "省级区域覆盖"],
          ["500+", "企业客户选择"],
          ["12h", "核心城市响应"],
          ["1v1", "专属客服跟进"],
        ].map(([value, label]) => (
          <div key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Service Capability</p>
          <h2>围绕企业供应链的全场景物流服务</h2>
          <p>从发货计划、车辆匹配、在途监控到签收回单，运满物流用标准化流程承接复杂运输需求。</p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article className={`service-card ${service.featured ? "featured" : ""}`} key={service.number}>
              <span className="service-icon">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ImageBand() {
  return (
    <section className="image-band">
      <div className="container image-band-grid">
        <div className="image-frame tall">
          <img src={driverScene} alt="物流工作人员与运输车辆场景" />
        </div>
        <div className="image-band-copy">
          <p className="eyebrow">Reliable Delivery</p>
          <h2>把复杂运输交给专业团队</h2>
          <p>
            我们以线路资源、车队调度、节点管控和客服响应构建稳定交付体系，
            帮助客户减少沟通成本、降低异常风险、提升供应链履约体验。
          </p>
          <ul className="check-list">
            <li>按业务波峰波谷灵活配置车型与承运资源</li>
            <li>运输节点主动反馈，异常信息及时同步</li>
            <li>回单、对账、结算流程清晰，协作更高效</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Advantages() {
  return (
    <section className="section soft-bg" id="advantages">
      <div className="container">
        <div className="section-heading split">
          <div>
            <p className="eyebrow">Why Yunman</p>
            <h2>稳定、透明、可控的物流交付体验</h2>
          </div>
          <p>面向企业客户的物流服务，真正重要的不只是把货送到，更是用可复制的服务标准保障每一次交付。</p>
        </div>

        <div className="advantage-grid">
          {advantages.map(([mark, title, text]) => (
            <article key={title}>
              <span>{mark}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Network() {
  const routes = ["华东 ↔ 华南", "华北 ↔ 华东", "华中 ↔ 西南", "长三角城市群", "珠三角城市群", "成渝经济圈"];

  return (
    <section className="section" id="network">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Network & Resources</p>
          <h2>覆盖全国的运输资源与服务网络</h2>
          <p>依托多区域运营节点与合作车队，运满物流可为不同规模客户提供弹性物流能力。</p>
        </div>

        <div className="network-layout">
          <div className="network-card large-photo">
            <img src={logisticsFleet} alt="物流车队与运输资源展示" />
            <div>
              <h3>全国干线调度</h3>
              <p>主流城市与产业带之间快速组织车辆，满足跨区域运输计划。</p>
            </div>
          </div>
          <div className="network-card">
            <img src={warehouseScene} alt="物流仓储与车辆运输场景" />
            <div>
              <h3>仓配协同能力</h3>
              <p>围绕仓储、分拣、配送节点，打通从库内到末端的履约链路。</p>
            </div>
          </div>
          <div className="route-panel">
            <h3>重点线路</h3>
            <div className="route-list">
              {routes.map((route) => (
                <span key={route}>{route}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="section process-section" id="process">
      <div className="container">
        <div className="section-heading split">
          <div>
            <p className="eyebrow">Process</p>
            <h2>四步开启高效物流合作</h2>
          </div>
          <p>用清晰流程降低协作成本，让需求、报价、执行和复盘都有据可依。</p>
        </div>

        <div className="process-grid">
          {processes.map(([step, title, text]) => (
            <article key={step}>
              <span>{step}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [message, setMessage] = useState("当前为展示站点，提交后会在本页提示需求已记录。");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    event.currentTarget.reset();
    setMessage("需求已记录。当前为演示站点，正式上线时可接入表单或客服系统。");
    setSubmitted(true);
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-grid">
        <div className="contact-copy">
          <p className="eyebrow">Contact Us</p>
          <h2>获取适合你业务的物流解决方案</h2>
          <p>
            留下基础需求，我们会根据发货线路、货量、车型与时效要求，
            为你梳理更稳妥的运输组织方式。
          </p>
          <div className="contact-methods">
            <a href="tel:400-800-6688">
              <strong>400-800-6688</strong>
              <span>服务热线</span>
            </a>
            <a href="mailto:service@yunman-logistics.com">
              <strong>service@yunman-logistics.com</strong>
              <span>商务合作邮箱</span>
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            <span>您的称呼</span>
            <input type="text" name="name" placeholder="例如：王经理" required />
          </label>
          <label>
            <span>联系电话</span>
            <input type="tel" name="phone" placeholder="请输入手机号或座机" required />
          </label>
          <label>
            <span>物流需求</span>
            <textarea name="message" rows="4" placeholder="例如：上海到广州，每周 3 车，需 9.6 米厢车" required />
          </label>
          <button className="btn btn-primary" type="submit">
            提交需求
          </button>
          <p className={`form-note ${submitted ? "is-success" : ""}`}>{message}</p>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Brand footer />
          <p>以可靠运输连接商业流通，让企业供应链更稳、更快、更安心。</p>
        </div>
        <div className="footer-links">
          {navItems.map(([href, label]) => (
            <a href={href} key={href}>
              {label}
            </a>
          ))}
          <a href="#contact">联系我们</a>
        </div>
        <p className="copyright">© {new Date().getFullYear()} 运满物流. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <ImageBand />
        <Advantages />
        <Network />
        <Process />
        <section className="cta-strip">
          <div className="container cta-grid">
            <div>
              <p className="eyebrow">Start Today</p>
              <h2>告诉我们你的发货计划，剩下交给运满物流</h2>
            </div>
            <a className="btn btn-light" href="#contact">
              预约专属顾问
            </a>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
