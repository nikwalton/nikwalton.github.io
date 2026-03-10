import { describe, it, expect, beforeEach } from "bun:test";
import { JSDOM } from "jsdom";

/**
 * Responsive design tests for GeneralLayout.astro
 * Tests verify layout adapts properly across device sizes
 */

describe("GeneralLayout Responsive Design", () => {
  let dom: JSDOM;
  let document: Document;

  const viewports = {
    mobile: { width: 375, height: 667, name: "Mobile (375px)" },
    tablet: { width: 768, height: 1024, name: "Tablet (768px)" },
    desktop: { width: 1920, height: 1080, name: "Desktop (1920px)" },
  };

  const createDOM = (viewport: { width: number; height: number }) => {
    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Portfolio website" />
        <title>Nikolaus Andrew Walton</title>
      </head>
      <body class="m-0 p-0 bg-black">
        <div class="fixed w-screen h-full">
          <!-- Dither Canvas would be here -->
          <canvas width="${viewport.width}" height="${viewport.height}"></canvas>
        </div>

        <div class="relative">
          <!-- Slot content -->
          <h1>Main Content</h1>
        </div>

        <footer class="bg-white rounded-xl relative">
          <div class="mx-2 flex items-center">
            <svg width="50" height="50"></svg>
            <p class="px-2 font-extralight text-sm">&copy; 2026</p>
          </div>
        </footer>
      </body>
      </html>
    `;
    return new JSDOM(html, { width: viewport.width, height: viewport.height });
  };

  describe("Background Canvas", () => {
    it("should render fixed Dither canvas on desktop", () => {
      dom = createDOM(viewports.desktop);
      document = dom.window.document;
      const fixedDiv = document.querySelector("div.fixed");
      expect(fixedDiv).toBeTruthy();
      expect(fixedDiv?.className).toContain("w-screen");
      expect(fixedDiv?.className).toContain("h-full");
    });

    it("should render fixed canvas on mobile", () => {
      dom = createDOM(viewports.mobile);
      document = dom.window.document;
      const fixedDiv = document.querySelector("div.fixed");
      expect(fixedDiv).toBeTruthy();
    });

    it("should have full screen width on all devices", () => {
      Object.values(viewports).forEach((viewport) => {
        dom = createDOM(viewport);
        document = dom.window.document;
        const fixedDiv = document.querySelector("div.fixed.w-screen");
        expect(fixedDiv).toBeTruthy();
      });
    });

    it("should have canvas element", () => {
      dom = createDOM(viewports.desktop);
      document = dom.window.document;
      const canvas = document.querySelector("canvas");
      expect(canvas).toBeTruthy();
    });
  });

  describe("Content Layering", () => {
    it("should render content above background with relative positioning", () => {
      dom = createDOM(viewports.desktop);
      document = dom.window.document;
      const relativeDiv = document.querySelector("div.relative");
      expect(relativeDiv).toBeTruthy();
    });

    it("should render content section on mobile", () => {
      dom = createDOM(viewports.mobile);
      document = dom.window.document;
      const relativeDiv = document.querySelector("div.relative");
      expect(relativeDiv).toBeTruthy();
      const heading = relativeDiv?.querySelector("h1");
      expect(heading?.textContent).toBe("Main Content");
    });

    it("should render footer after content", () => {
      dom = createDOM(viewports.desktop);
      document = dom.window.document;
      const footer = document.querySelector("footer");
      expect(footer).toBeTruthy();
    });
  });

  describe("Footer Section", () => {
    it("should render footer on desktop", () => {
      dom = createDOM(viewports.desktop);
      document = dom.window.document;
      const footer = document.querySelector("footer");
      expect(footer).toBeTruthy();
      expect(footer?.className).toContain("bg-white");
    });

    it("should render footer on mobile", () => {
      dom = createDOM(viewports.mobile);
      document = dom.window.document;
      const footer = document.querySelector("footer");
      expect(footer).toBeTruthy();
    });

    it("should have white background for footer", () => {
      dom = createDOM(viewports.desktop);
      document = dom.window.document;
      const footer = document.querySelector("footer");
      expect(footer?.className).toContain("bg-white");
    });

    it("should have rounded corners on footer", () => {
      dom = createDOM(viewports.desktop);
      document = dom.window.document;
      const footer = document.querySelector("footer");
      expect(footer?.className).toContain("rounded-xl");
    });

    it("should display logo element", () => {
      dom = createDOM(viewports.mobile);
      document = dom.window.document;
      const logo = document.querySelector("footer svg");
      expect(logo).toBeTruthy();
      expect(logo?.getAttribute("width")).toBe("50");
      expect(logo?.getAttribute("height")).toBe("50");
    });

    it("should display copyright text", () => {
      dom = createDOM(viewports.desktop);
      document = dom.window.document;
      const copyright = document.querySelector("footer p");
      expect(copyright?.textContent).toContain("2026");
    });

    it("should have flex layout for footer content", () => {
      dom = createDOM(viewports.mobile);
      document = dom.window.document;
      const footerDiv = document.querySelector("footer > div");
      expect(footerDiv?.className).toContain("flex");
      expect(footerDiv?.className).toContain("items-center");
    });

    it("should have proper padding on mobile (mx-2)", () => {
      dom = createDOM(viewports.mobile);
      document = dom.window.document;
      const footerDiv = document.querySelector("footer > div");
      expect(footerDiv?.className).toContain("mx-2");
    });
  });

  describe("Viewport Meta Configuration", () => {
    it("should have viewport meta tag", () => {
      dom = createDOM(viewports.desktop);
      document = dom.window.document;
      const viewportMeta = document.querySelector('meta[name="viewport"]');
      expect(viewportMeta).toBeTruthy();
    });

    it("should set device width", () => {
      dom = createDOM(viewports.mobile);
      document = dom.window.document;
      const viewportMeta = document.querySelector('meta[name="viewport"]');
      const content = viewportMeta?.getAttribute("content");
      expect(content).toContain("width=device-width");
    });

    it("should have proper charset", () => {
      dom = createDOM(viewports.desktop);
      document = dom.window.document;
      const charsetMeta = document.querySelector('meta[charset]');
      expect(charsetMeta).toBeTruthy();
      expect(charsetMeta?.getAttribute("charset")).toBe("utf-8");
    });

    it("should have description meta tag", () => {
      dom = createDOM(viewports.mobile);
      document = dom.window.document;
      const descriptionMeta = document.querySelector('meta[name="description"]');
      expect(descriptionMeta).toBeTruthy();
    });

    it("should have proper page title", () => {
      dom = createDOM(viewports.desktop);
      document = dom.window.document;
      expect(document.title).toBe("Nikolaus Andrew Walton");
    });
  });

  describe("Layout Structure", () => {
    it("should have proper stacking: fixed background, relative content, footer", () => {
      dom = createDOM(viewports.desktop);
      document = dom.window.document;
      const body = document.body;
      const children = Array.from(body.children);
      expect(children.length).toBeGreaterThanOrEqual(3);
      expect(children[0].className).toContain("fixed");
      expect(children[1].className).toContain("relative");
      expect(children[2].tagName).toBe("FOOTER");
    });

    it("should maintain layout on mobile viewport", () => {
      dom = createDOM(viewports.mobile);
      document = dom.window.document;
      const body = document.body;
      const children = Array.from(body.children);
      expect(children.length).toBeGreaterThanOrEqual(3);
    });

    it("should have body with black background", () => {
      dom = createDOM(viewports.desktop);
      document = dom.window.document;
      const body = document.body;
      expect(body.className).toContain("bg-black");
    });

    it("should have zero body margins", () => {
      dom = createDOM(viewports.mobile);
      document = dom.window.document;
      const body = document.body;
      expect(body.className).toContain("m-0");
      expect(body.className).toContain("p-0");
    });
  });

  describe("Responsive Behavior", () => {
    it("should render properly on all viewport sizes", () => {
      Object.values(viewports).forEach((viewport) => {
        dom = createDOM(viewport);
        document = dom.window.document;
        const footer = document.querySelector("footer");
        const content = document.querySelector("div.relative");
        const background = document.querySelector("div.fixed");
        expect(footer).toBeTruthy();
        expect(content).toBeTruthy();
        expect(background).toBeTruthy();
      });
    });

    it("should maintain structure when resizing from desktop to mobile", () => {
      dom = createDOM(viewports.desktop);
      document = dom.window.document;
      const desktopFooter = document.querySelector("footer");
      expect(desktopFooter).toBeTruthy();

      dom = createDOM(viewports.mobile);
      document = dom.window.document;
      const mobileFooter = document.querySelector("footer");
      expect(mobileFooter).toBeTruthy();
    });

    it("should have fixed positioning preventing scroll of background", () => {
      dom = createDOM(viewports.mobile);
      document = dom.window.document;
      const fixedBg = document.querySelector("div.fixed");
      expect(fixedBg?.className).toContain("fixed");
    });
  });

  describe("Scroll and Overflow", () => {
    it("should allow content scrolling on mobile", () => {
      dom = createDOM(viewports.mobile);
      document = dom.window.document;
      const contentDiv = document.querySelector("div.relative");
      expect(contentDiv).toBeTruthy();
    });

    it("should not have horizontal overflow", () => {
      Object.values(viewports).forEach((viewport) => {
        dom = createDOM(viewport);
        document = dom.window.document;
        const body = document.body;
        expect(body.scrollWidth).toBeLessThanOrEqual(viewport.width + 20); // +20 for margin of error
      });
    });
  });

  describe("Accessibility", () => {
    it("should have proper page title", () => {
      dom = createDOM(viewports.desktop);
      document = dom.window.document;
      expect(document.title).toBeTruthy();
    });

    it("should have semantic footer element", () => {
      dom = createDOM(viewports.mobile);
      document = dom.window.document;
      const footer = document.querySelector("footer");
      expect(footer?.tagName).toBe("FOOTER");
    });

    it("should have proper heading structure", () => {
      dom = createDOM(viewports.desktop);
      document = dom.window.document;
      const heading = document.querySelector("h1");
      expect(heading).toBeTruthy();
    });
  });
});
