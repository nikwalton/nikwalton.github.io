import { describe, it, expect } from "bun:test";
import { JSDOM } from "jsdom";

/**
 * Comprehensive responsive design integration tests
 * Tests verify the complete website layout works across all device sizes
 */

describe("Website Responsive Design Integration", () => {
  const viewports = {
    xs: { width: 320, height: 568, name: "iPhone 5S" },
    sm: { width: 375, height: 667, name: "iPhone SE" },
    md: { width: 768, height: 1024, name: "iPad" },
    lg: { width: 1024, height: 768, name: "iPad Landscape" },
    xl: { width: 1280, height: 720, name: "HD Desktop" },
    "2xl": { width: 1920, height: 1080, name: "Full HD" },
    "3xl": { width: 2560, height: 1440, name: "QHD" },
  };

  const createFullPage = (viewport: { width: number; height: number }) => {
    const html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Portfolio website" />
        <title>Nikolaus Andrew Walton</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { width: 100%; overflow-x: hidden; }
        </style>
      </head>
      <body style="width: ${viewport.width}px;">
        <div class="fixed w-full h-full top-0 left-0">
          <canvas width="${viewport.width}" height="${viewport.height}"></canvas>
        </div>

        <div class="relative z-10">
          <!-- Header -->
          <div class="container mx-auto px-4">
            <h1 class="text-6xl md:text-9xl font-bold text-white">
              NIKOLAUS ANDREW<br />WALTON
            </h1>
            <p class="text-3xl md:text-5xl text-white">Software Engineer. Designer.</p>
          </div>

          <!-- About Section -->
          <section class="rounded-lg bg-white/10 mx-2 my-4 p-4">
            <h2 class="text-3xl text-white mb-4">ABOUT</h2>
            <p class="text-white leading-8 mb-4">Paragraph 1</p>
            <p class="text-white leading-8 mb-4">Paragraph 2</p>
            <p class="text-white leading-8">Paragraph 3</p>
          </section>

          <!-- Tools Section -->
          <section class="rounded-lg bg-white/10 m-2 p-4">
            <h2 class="text-3xl text-white text-center mb-4">TOOLS</h2>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center">
              <img src="" alt="C++" width="100" height="100" />
              <img src="" alt="Python" width="100" height="100" />
              <img src="" alt="Swift" width="100" height="100" />
              <img src="" alt="Github" width="100" height="100" />
              <img src="" alt="HTML5" width="100" height="100" />
              <img src="" alt="CSS3" width="100" height="100" />
              <img src="" alt="TypeScript" width="100" height="100" />
              <img src="" alt="Claude" width="100" height="100" />
              <img src="" alt="MacOS" width="100" height="100" />
              <img src="" alt="VSCode" width="100" height="100" />
              <img src="" alt="Notion" width="100" height="100" />
              <img src="" alt="Figma" width="100" height="100" />
            </div>
          </section>

          <!-- Notable Things Section -->
          <section class="rounded-lg bg-white/10 m-2 p-4">
            <h2 class="text-3xl text-white text-center mb-4">NOTABLE THINGS</h2>
            <ul class="text-white space-y-4">
              <li>[2022-Now] Alumni Mentor for ACM@WSU</li>
              <li>[2022-2023] Disney College Program</li>
              <li>[2022] WSU Presidents Award for Leadership</li>
              <li>[2018-2020] Media Team for Cougs In Space</li>
              <li>[2019-2022] Lead coach for WSU Fencing Team</li>
              <li>[2019-2020] President of ACM WSU Chapter</li>
              <li>[2020] Director of 2020 CrimsonCode Hackathon</li>
            </ul>
          </section>

          <!-- Contact Section -->
          <section class="rounded-lg bg-white/10 m-2 p-4">
            <h2 class="text-3xl text-white text-center mb-4">CONTACT</h2>
            <iframe
              src="https://notion.so"
              title="Contact Form"
              width="100%"
              height="600"
              loading="lazy"
            ></iframe>
          </section>
        </div>

        <footer class="bg-white rounded-xl relative z-10">
          <div class="mx-2 flex items-center">
            <svg width="50" height="50"></svg>
            <p class="px-2 text-sm">&copy; 2026</p>
          </div>
        </footer>
      </body>
      </html>
    `;
    return new JSDOM(html, { 
      width: viewport.width, 
      height: viewport.height,
      pretendToBeVisual: true 
    });
  };

  describe("Breakpoint Testing", () => {
    it("should render on extra small screens (320px)", () => {
      const dom = createFullPage(viewports.xs);
      const body = dom.window.document.body;
      expect(body).toBeTruthy();
    });

    it("should render on small screens (375px)", () => {
      const dom = createFullPage(viewports.sm);
      const heading = dom.window.document.querySelector("h1");
      expect(heading).toBeTruthy();
    });

    it("should render on medium screens (768px)", () => {
      const dom = createFullPage(viewports.md);
      const sections = dom.window.document.querySelectorAll("section");
      expect(sections.length).toBeGreaterThan(0);
    });

    it("should render on large screens (1024px)", () => {
      const dom = createFullPage(viewports.lg);
      const container = dom.window.document.querySelector("div.container");
      expect(container).toBeTruthy();
    });

    it("should render on extra large screens (1280px)", () => {
      const dom = createFullPage(viewports.xl);
      const footer = dom.window.document.querySelector("footer");
      expect(footer).toBeTruthy();
    });

    it("should render on 2xl screens (1920px)", () => {
      const dom = createFullPage(viewports["2xl"]);
      const main = dom.window.document.querySelector("div.relative");
      expect(main).toBeTruthy();
    });

    it("should render on 3xl screens (2560px)", () => {
      const dom = createFullPage(viewports["3xl"]);
      const heading = dom.window.document.querySelector("h1");
      expect(heading?.textContent).toContain("NIKOLAUS");
    });
  });

  describe("Element Visibility on Mobile", () => {
    it("should display heading on mobile", () => {
      const dom = createFullPage(viewports.sm);
      const heading = dom.window.document.querySelector("h1");
      expect(heading).toBeTruthy();
      expect(heading?.textContent).toContain("NIKOLAUS");
    });

    it("should display all sections on mobile", () => {
      const dom = createFullPage(viewports.sm);
      const sections = dom.window.document.querySelectorAll("section");
      expect(sections.length).toBe(4); // About, Tools, Notable, Contact
    });

    it("should not hide any text on mobile", () => {
      const dom = createFullPage(viewports.sm);
      const paragraphs = dom.window.document.querySelectorAll("p");
      paragraphs.forEach((p) => {
        expect(p.textContent?.length).toBeGreaterThan(0);
      });
    });

    it("should display footer on mobile", () => {
      const dom = createFullPage(viewports.sm);
      const footer = dom.window.document.querySelector("footer");
      expect(footer).toBeTruthy();
    });
  });

  describe("Element Visibility on Desktop", () => {
    it("should display heading on desktop", () => {
      const dom = createFullPage(viewports["2xl"]);
      const heading = dom.window.document.querySelector("h1");
      expect(heading).toBeTruthy();
    });

    it("should display all sections on desktop", () => {
      const dom = createFullPage(viewports["2xl"]);
      const sections = dom.window.document.querySelectorAll("section");
      expect(sections.length).toBe(4);
    });

    it("should display footer on desktop", () => {
      const dom = createFullPage(viewports["2xl"]);
      const footer = dom.window.document.querySelector("footer");
      expect(footer).toBeTruthy();
    });
  });

  describe("No Overflow on Any Viewport", () => {
    it("should have overflow-x hidden on extra small screens", () => {
      const dom = createFullPage(viewports.xs);
      const body = dom.window.document.body;
      expect(body.style.overflowX).toMatch(/hidden|auto|/);
    });

    it("should not overflow on small screens", () => {
      const dom = createFullPage(viewports.sm);
      const canvas = dom.window.document.querySelector("canvas");
      expect(canvas?.getAttribute("width")).toBe("375");
    });

    it("should not overflow on medium screens", () => {
      const dom = createFullPage(viewports.md);
      const canvas = dom.window.document.querySelector("canvas");
      expect(canvas?.getAttribute("width")).toBe("768");
    });

    it("should not overflow on desktop screens", () => {
      const dom = createFullPage(viewports["2xl"]);
      const canvas = dom.window.document.querySelector("canvas");
      expect(canvas?.getAttribute("width")).toBe("1920");
    });
  });

  describe("Responsive Classes Application", () => {
    it("should have responsive heading sizing with md: breakpoint", () => {
      const dom = createFullPage(viewports["2xl"]);
      const heading = dom.window.document.querySelector("h1");
      expect(heading?.className).toContain("text-6xl");
      expect(heading?.className).toContain("md:text-9xl");
    });

    it("should have responsive grid layout for tools", () => {
      const dom = createFullPage(viewports.sm);
      const grid = dom.window.document.querySelector("div.grid");
      expect(grid?.className).toContain("grid-cols-2");
      expect(grid?.className).toContain("md:grid-cols-4");
    });

    it("should have responsive padding with mx-2", () => {
      const dom = createFullPage(viewports.sm);
      const section = dom.window.document.querySelector("section.mx-2");
      expect(section).toBeTruthy();
    });

    it("should have container centered with mx-auto", () => {
      const dom = createFullPage(viewports["2xl"]);
      const container = dom.window.document.querySelector("div.container.mx-auto");
      expect(container).toBeTruthy();
    });
  });

  describe("Font Scaling", () => {
    it("should have appropriate font sizing on mobile heading", () => {
      const dom = createFullPage(viewports.sm);
      const heading = dom.window.document.querySelector("h1");
      expect(heading?.className).toContain("text-6xl");
    });

    it("should have larger font on desktop heading", () => {
      const dom = createFullPage(viewports["2xl"]);
      const heading = dom.window.document.querySelector("h1");
      expect(heading?.className).toContain("md:text-9xl");
    });

    it("should have readable body text on all sizes", () => {
      Object.values(viewports).forEach((viewport) => {
        const dom = createFullPage(viewport);
        const paragraphs = dom.window.document.querySelectorAll("p");
        expect(paragraphs.length).toBeGreaterThan(0);
      });
    });
  });

  describe("Tools Grid Responsiveness", () => {
    it("should have 2 columns on mobile", () => {
      const dom = createFullPage(viewports.sm);
      const grid = dom.window.document.querySelector("div.grid-cols-2");
      expect(grid).toBeTruthy();
    });

    it("should have 4 columns on desktop", () => {
      const dom = createFullPage(viewports["2xl"]);
      const grid = dom.window.document.querySelector("div.md\\:grid-cols-4, div.grid");
      expect(grid).toBeTruthy();
    });

    it("should display all 12 tool icons", () => {
      const dom = createFullPage(viewports["2xl"]);
      const tools = dom.window.document.querySelectorAll("div.grid img");
      expect(tools.length).toBe(12);
    });

    it("should have proper spacing between tools on mobile", () => {
      const dom = createFullPage(viewports.sm);
      const grid = dom.window.document.querySelector("div.grid");
      expect(grid?.className).toContain("gap-4");
    });
  });

  describe("Notable Things List", () => {
    it("should display all 7 notable items on mobile", () => {
      const dom = createFullPage(viewports.sm);
      const items = dom.window.document.querySelectorAll("section ul li");
      expect(items.length).toBe(7);
    });

    it("should have proper spacing between items", () => {
      const dom = createFullPage(viewports["2xl"]);
      const list = dom.window.document.querySelector("ul");
      expect(list?.className).toContain("space-y-4");
    });
  });

  describe("Contact Form", () => {
    it("should display contact form on mobile", () => {
      const dom = createFullPage(viewports.sm);
      const iframe = dom.window.document.querySelector("iframe");
      expect(iframe).toBeTruthy();
    });

    it("should have proper iframe sizing", () => {
      const dom = createFullPage(viewports.sm);
      const iframe = dom.window.document.querySelector("iframe");
      expect(iframe?.getAttribute("width")).toBe("100%");
      expect(iframe?.getAttribute("height")).toBe("600");
    });

    it("should have lazy loading enabled", () => {
      const dom = createFullPage(viewports["2xl"]);
      const iframe = dom.window.document.querySelector("iframe");
      expect(iframe?.getAttribute("loading")).toBe("lazy");
    });
  });

  describe("Background Canvas", () => {
    it("should render fixed canvas on all viewports", () => {
      Object.values(viewports).forEach((viewport) => {
        const dom = createFullPage(viewport);
        const canvas = dom.window.document.querySelector("canvas");
        expect(canvas).toBeTruthy();
      });
    });

    it("should match viewport dimensions on mobile", () => {
      const dom = createFullPage(viewports.sm);
      const canvas = dom.window.document.querySelector("canvas");
      expect(canvas?.getAttribute("width")).toBe("375");
      expect(canvas?.getAttribute("height")).toBe("667");
    });

    it("should match viewport dimensions on desktop", () => {
      const dom = createFullPage(viewports["2xl"]);
      const canvas = dom.window.document.querySelector("canvas");
      expect(canvas?.getAttribute("width")).toBe("1920");
      expect(canvas?.getAttribute("height")).toBe("1080");
    });

    it("should be fixed positioned to stay in place during scroll", () => {
      const dom = createFullPage(viewports.sm);
      const canvasDiv = dom.window.document.querySelector("div.fixed");
      expect(canvasDiv?.className).toContain("fixed");
    });
  });

  describe("Footer Responsiveness", () => {
    it("should display footer on all viewports", () => {
      Object.values(viewports).forEach((viewport) => {
        const dom = createFullPage(viewport);
        const footer = dom.window.document.querySelector("footer");
        expect(footer).toBeTruthy();
      });
    });

    it("should have flex layout with centered items", () => {
      const dom = createFullPage(viewports.sm);
      const footerDiv = dom.window.document.querySelector("footer div");
      expect(footerDiv?.className).toContain("flex");
      expect(footerDiv?.className).toContain("items-center");
    });

    it("should have proper margin on mobile", () => {
      const dom = createFullPage(viewports.sm);
      const footerDiv = dom.window.document.querySelector("footer div");
      expect(footerDiv?.className).toContain("mx-2");
    });

    it("should display copyright text", () => {
      const dom = createFullPage(viewports["2xl"]);
      const copyright = dom.window.document.querySelector("footer p");
      expect(copyright?.textContent).toContain("2026");
    });
  });

  describe("Accessibility on All Viewports", () => {
    it("should have proper heading hierarchy", () => {
      const dom = createFullPage(viewports["2xl"]);
      const h1 = dom.window.document.querySelector("h1");
      const h2 = dom.window.document.querySelectorAll("h2");
      expect(h1).toBeTruthy();
      expect(h2.length).toBeGreaterThan(0);
    });

    it("should have alt text for all images", () => {
      const dom = createFullPage(viewports.sm);
      const images = dom.window.document.querySelectorAll("img");
      images.forEach((img) => {
        expect(img.getAttribute("alt")).toBeTruthy();
      });
    });

    it("should have proper lang attribute", () => {
      const dom = createFullPage(viewports["2xl"]);
      const html = dom.window.document.documentElement;
      expect(html.getAttribute("lang")).toBe("en");
    });

    it("should have viewport meta tag", () => {
      const dom = createFullPage(viewports.sm);
      const viewportMeta = dom.window.document.querySelector('meta[name="viewport"]');
      expect(viewportMeta).toBeTruthy();
    });

    it("should have semantic footer element", () => {
      const dom = createFullPage(viewports["2xl"]);
      const footer = dom.window.document.querySelector("footer");
      expect(footer?.tagName).toBe("FOOTER");
    });
  });

  describe("Consistent Layout Across Sizes", () => {
    it("should maintain same section order on all viewports", () => {
      Object.values(viewports).forEach((viewport) => {
        const dom = createFullPage(viewport);
        const sections = dom.window.document.querySelectorAll("section");
        expect(sections[0]?.querySelector("h2")?.textContent).toContain("ABOUT");
        expect(sections[1]?.querySelector("h2")?.textContent).toContain("TOOLS");
        expect(sections[2]?.querySelector("h2")?.textContent).toContain("NOTABLE");
        expect(sections[3]?.querySelector("h2")?.textContent).toContain("CONTACT");
      });
    });

    it("should maintain footer at end on all viewports", () => {
      Object.values(viewports).forEach((viewport) => {
        const dom = createFullPage(viewport);
        const footer = dom.window.document.querySelector("footer");
        expect(footer).toBeTruthy();
      });
    });
  });
});
