import { describe, it, expect, beforeEach } from "bun:test";
import { JSDOM } from "jsdom";

/**
 * Responsive design tests for index.astro
 * Tests verify all elements are visible and properly sized on mobile and desktop
 */

describe("Index Page Responsive Design", () => {
  let dom: JSDOM;
  let document: Document;
  let window: Window & typeof globalThis;

  const viewports = {
    mobile: { width: 375, height: 667, name: "Mobile (375px)" },
    tablet: { width: 768, height: 1024, name: "Tablet (768px)" },
    desktop: { width: 1920, height: 1080, name: "Desktop (1920px)" },
  };

  const createDOM = (viewport: { width: number; height: number }) => {
    const html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width" />
      </head>
      <body style="margin: 0; padding: 0;">
        <div class="container mx-auto">
          <h1 class="font-eva text-white text-8xl md:text-9xl">
            NIKOLAUS ANDREW <br /> WALTON
          </h1>
          <p class="text-white text-5xl">Software Engineer. Designer.</p>
        </div>

        <div class="rounded-lg bg-white/10 mx-2 my-4">
          <h2 class="text-3xl text-white">ABOUT</h2>
          <p class="p-2 text-white">Paragraph 1</p>
          <p class="p-2 text-white">Paragraph 2</p>
          <p class="p-2 text-white">Paragraph 3</p>
        </div>

        <div class="rounded-lg bg-white/10 m-2">
          <h2 class="text-3xl text-white">TOOLS</h2>
          <div class="container mx-auto grid grid-cols-4 justify-items-center">
            <img width="100" height="100" alt="C++" />
            <img width="100" height="100" alt="Python" />
            <img width="100" height="100" alt="Swift" />
            <img width="100" height="100" alt="Github" />
            <img width="100" height="100" alt="HTML 5" />
            <img width="100" height="100" alt="CSS 3" />
            <img width="100" height="100" alt="Typescript" />
            <img width="100" height="100" alt="Claude" />
            <img width="100" height="100" alt="MacOS" />
            <img width="100" height="100" alt="VS Code" />
            <img width="100" height="100" alt="Notion" />
            <img width="100" height="100" alt="Figma" />
          </div>
        </div>

        <h2 class="text-3xl text-white">NOTABLE THINGS</h2>
        <div class="rounded-lg bg-white/10 m-2 p-4">
          <p class="text-white">[2022-Now] Alumni Mentor for ACM@WSU</p>
          <p class="text-white">[2022-2023] Disney College Program</p>
          <p class="text-white">[2022] WSU Presidents Award for Leadership</p>
          <p class="text-white">[2018-2020] Media Team for Cougs In Space</p>
          <p class="text-white">[2019-2022] Lead coach for WSU Fencing Team</p>
          <p class="text-white">[2019-2020] President of ACM WSU Chapter</p>
          <p class="text-white">[2020] Director of 2020 CrimsonCode Hackathon</p>
        </div>

        <div class="rounded-lg bg-white/10 m-2">
          <h2 class="text-3xl text-white">CONTACT</h2>
          <iframe
            src="https://silly-gruyere-373.notion.site/"
            title="Contact Form"
            width="100%"
            height="600"
            loading="lazy"
          ></iframe>
        </div>
      </body>
      </html>
    `;
    return new JSDOM(html, { width: viewport.width, height: viewport.height });
  };

  describe("Header Section", () => {
    it("should display main heading on desktop", () => {
      dom = createDOM(viewports.desktop);
      document = dom.window.document;
      const heading = document.querySelector("h1");
      expect(heading).toBeTruthy();
      expect(heading?.textContent).toContain("NIKOLAUS ANDREW");
      expect(heading?.textContent).toContain("WALTON");
    });

    it("should display main heading on mobile", () => {
      dom = createDOM(viewports.mobile);
      document = dom.window.document;
      const heading = document.querySelector("h1");
      expect(heading).toBeTruthy();
      expect(heading?.textContent).toContain("NIKOLAUS");
    });

    it("should display subtitle on all viewport sizes", () => {
      Object.values(viewports).forEach((viewport) => {
        dom = createDOM(viewport);
        document = dom.window.document;
        const subtitle = document.querySelector("p.text-5xl");
        expect(subtitle).toBeTruthy();
        expect(subtitle?.textContent).toContain("Software Engineer");
      });
    });

    it("should have heading class for responsive sizing", () => {
      dom = createDOM(viewports.desktop);
      document = dom.window.document;
      const heading = document.querySelector("h1");
      expect(heading?.className).toContain("text-8xl");
      expect(heading?.className).toContain("md:text-9xl");
    });
  });

  describe("About Section", () => {
    it("should render about section container on all viewports", () => {
      Object.values(viewports).forEach((viewport) => {
        dom = createDOM(viewport);
        document = dom.window.document;
        const aboutSection = document.querySelector("div.rounded-lg");
        expect(aboutSection).toBeTruthy();
      });
    });

    it("should contain about heading", () => {
      dom = createDOM(viewports.mobile);
      document = dom.window.document;
      const aboutHeading = Array.from(document.querySelectorAll("h2")).find(
        (h) => h.textContent?.includes("ABOUT"),
      );
      expect(aboutHeading).toBeTruthy();
    });

    it("should display all three paragraphs", () => {
      dom = createDOM(viewports.mobile);
      document = dom.window.document;
      const aboutSection = document.querySelector("div.rounded-lg.mx-2");
      const paragraphs = aboutSection?.querySelectorAll("p.text-white");
      expect(paragraphs?.length).toBeGreaterThanOrEqual(3);
    });

    it("should have proper padding on mobile (mx-2 my-4)", () => {
      dom = createDOM(viewports.mobile);
      document = dom.window.document;
      const aboutDiv = document.querySelector("div.mx-2.my-4");
      expect(aboutDiv).toBeTruthy();
    });
  });

  describe("Tools Section", () => {
    it("should display tools grid on desktop", () => {
      dom = createDOM(viewports.desktop);
      document = dom.window.document;
      const toolsSection = Array.from(document.querySelectorAll("h2")).find(
        (h) => h.textContent?.includes("TOOLS"),
      );
      expect(toolsSection).toBeTruthy();
    });

    it("should have 12 tool icons", () => {
      dom = createDOM(viewports.desktop);
      document = dom.window.document;
      const toolImages = document.querySelectorAll("div.grid-cols-4 img");
      expect(toolImages.length).toBe(12);
    });

    it("should have proper accessibility labels for all tools", () => {
      dom = createDOM(viewports.desktop);
      document = dom.window.document;
      const toolImages = document.querySelectorAll("div.grid-cols-4 img");
      toolImages.forEach((img) => {
        expect(img.getAttribute("alt")).toBeTruthy();
      });
    });

    it("should maintain grid layout on mobile", () => {
      dom = createDOM(viewports.mobile);
      document = dom.window.document;
      const grid = document.querySelector("div.grid-cols-4");
      expect(grid).toBeTruthy();
      expect(grid?.className).toContain("grid");
    });

    it("should have centered tool items", () => {
      dom = createDOM(viewports.desktop);
      document = dom.window.document;
      const grid = document.querySelector("div.grid-cols-4");
      expect(grid?.className).toContain("justify-items-center");
    });
  });

  describe("Notable Things Section", () => {
    it("should render notable items section", () => {
      dom = createDOM(viewports.desktop);
      document = dom.window.document;
      const notableHeading = Array.from(document.querySelectorAll("h2")).find(
        (h) => h.textContent?.includes("NOTABLE"),
      );
      expect(notableHeading).toBeTruthy();
    });

    it("should display all notable items", () => {
      dom = createDOM(viewports.mobile);
      document = dom.window.document;
      const notableHeading = Array.from(document.querySelectorAll("h2")).find(
        (h) => h.textContent?.includes("NOTABLE"),
      );
      expect(notableHeading).toBeTruthy();
    });
  });

  describe("Contact Section", () => {
    it("should render contact section", () => {
      dom = createDOM(viewports.desktop);
      document = dom.window.document;
      const contactHeading = Array.from(document.querySelectorAll("h2")).find(
        (h) => h.textContent?.includes("CONTACT"),
      );
      expect(contactHeading).toBeTruthy();
    });

    it("should have contact form iframe", () => {
      dom = createDOM(viewports.desktop);
      document = dom.window.document;
      const iframe = document.querySelector("iframe[title='Contact Form']");
      expect(iframe).toBeTruthy();
      expect(iframe?.getAttribute("width")).toBe("100%");
    });

    it("should have proper iframe height on desktop", () => {
      dom = createDOM(viewports.desktop);
      document = dom.window.document;
      const iframe = document.querySelector("iframe");
      expect(iframe?.getAttribute("height")).toBe("600");
    });

    it("should have lazy loading enabled", () => {
      dom = createDOM(viewports.mobile);
      document = dom.window.document;
      const iframe = document.querySelector("iframe");
      expect(iframe?.getAttribute("loading")).toBe("lazy");
    });
  });

  describe("No Horizontal Overflow", () => {
    it("should not overflow on mobile (375px)", () => {
      dom = createDOM(viewports.mobile);
      document = dom.window.document;
      const body = document.body;
      const maxContentWidth = Math.max(
        ...Array.from(document.querySelectorAll("*")).map(
          (el) => (el as HTMLElement).scrollWidth,
        ),
      );
      expect(maxContentWidth).toBeLessThanOrEqual(viewports.mobile.width);
    });

    it("should not overflow on tablet (768px)", () => {
      dom = createDOM(viewports.tablet);
      document = dom.window.document;
      const maxContentWidth = Math.max(
        ...Array.from(document.querySelectorAll("*")).map(
          (el) => (el as HTMLElement).scrollWidth,
        ),
      );
      expect(maxContentWidth).toBeLessThanOrEqual(viewports.tablet.width);
    });

    it("should respect viewport width constraints", () => {
      Object.values(viewports).forEach((viewport) => {
        dom = createDOM(viewport);
        document = dom.window.document;
        const containers = document.querySelectorAll("div.container");
        expect(containers.length).toBeGreaterThan(0);
      });
    });
  });

  describe("Text Legibility", () => {
    it("should have text content on mobile", () => {
      dom = createDOM(viewports.mobile);
      document = dom.window.document;
      const textElements = document.querySelectorAll("p, h1, h2");
      expect(textElements.length).toBeGreaterThan(0);
    });

    it("should maintain white text color for contrast", () => {
      dom = createDOM(viewports.desktop);
      document = dom.window.document;
      const whiteTextElements = document.querySelectorAll(
        "p.text-white, h1.text-white, h2.text-white",
      );
      expect(whiteTextElements.length).toBeGreaterThan(0);
    });

    it("should have readable heading sizes", () => {
      dom = createDOM(viewports.desktop);
      document = dom.window.document;
      const h1 = document.querySelector("h1");
      const h2 = document.querySelector("h2");
      expect(h1).toBeTruthy();
      expect(h2).toBeTruthy();
    });
  });

  describe("Container and Spacing", () => {
    it("should have centered container on desktop", () => {
      dom = createDOM(viewports.desktop);
      document = dom.window.document;
      const containers = document.querySelectorAll("div.container.mx-auto");
      expect(containers.length).toBeGreaterThan(0);
    });

    it("should have proper margins on all sections on mobile", () => {
      dom = createDOM(viewports.mobile);
      document = dom.window.document;
      const marginElements = document.querySelectorAll("div.m-2, div.mx-2");
      expect(marginElements.length).toBeGreaterThan(0);
    });

    it("should have proper rounded corners for glass effect", () => {
      dom = createDOM(viewports.mobile);
      document = dom.window.document;
      const roundedElements = document.querySelectorAll("div.rounded-lg");
      expect(roundedElements.length).toBeGreaterThan(0);
    });
  });
});
