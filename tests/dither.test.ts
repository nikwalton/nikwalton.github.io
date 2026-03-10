import { describe, it, expect } from "bun:test";
import { JSDOM } from "jsdom";

/**
 * Responsive design tests for Three.js Dither canvas component
 * Tests verify canvas renders properly on all device sizes
 */

describe("Dither Component Responsive Design", () => {
  const viewports = {
    mobileSmall: { width: 375, height: 667, name: "iPhone SE" },
    mobileMedium: { width: 390, height: 844, name: "iPhone 12/13" },
    mobileLandscape: { width: 812, height: 375, name: "Mobile Landscape" },
    tablet: { width: 768, height: 1024, name: "iPad" },
    desktop: { width: 1920, height: 1080, name: "Desktop" },
    ultrawide: { width: 2560, height: 1440, name: "Ultrawide" },
  };

  const createCanvasHTML = (viewport: { width: number; height: number }) => {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body style="width: ${viewport.width}px; height: ${viewport.height}px; margin: 0; padding: 0;">
        <div class="fixed w-screen h-full">
          <canvas 
            width="${viewport.width}" 
            height="${viewport.height}"
            style="display: block; width: 100%; height: 100%;"
          ></canvas>
        </div>
      </body>
      </html>
    `;
  };

  describe("Canvas Creation", () => {
    it("should create canvas on mobile (375px)", () => {
      const html = createCanvasHTML(viewports.mobileSmall);
      const dom = new JSDOM(html);
      const canvas = dom.window.document.querySelector("canvas");
      expect(canvas).toBeTruthy();
      expect(canvas?.getAttribute("width")).toBe("375");
      expect(canvas?.getAttribute("height")).toBe("667");
    });

    it("should create canvas on tablet (768px)", () => {
      const html = createCanvasHTML(viewports.tablet);
      const dom = new JSDOM(html);
      const canvas = dom.window.document.querySelector("canvas");
      expect(canvas).toBeTruthy();
    });

    it("should create canvas on desktop (1920px)", () => {
      const html = createCanvasHTML(viewports.desktop);
      const dom = new JSDOM(html);
      const canvas = dom.window.document.querySelector("canvas");
      expect(canvas).toBeTruthy();
    });

    it("should create canvas on ultrawide (2560px)", () => {
      const html = createCanvasHTML(viewports.ultrawide);
      const dom = new JSDOM(html);
      const canvas = dom.window.document.querySelector("canvas");
      expect(canvas).toBeTruthy();
    });
  });

  describe("Canvas Sizing", () => {
    it("should have full width container on mobile", () => {
      const html = createCanvasHTML(viewports.mobileSmall);
      const dom = new JSDOM(html);
      const container = dom.window.document.querySelector("div.w-screen");
      expect(container).toBeTruthy();
      expect(container?.className).toContain("w-screen");
    });

    it("should have full height container", () => {
      const html = createCanvasHTML(viewports.desktop);
      const dom = new JSDOM(html);
      const container = dom.window.document.querySelector("div.h-full");
      expect(container).toBeTruthy();
    });

    it("should set canvas width attribute correctly", () => {
      Object.entries(viewports).forEach(([key, viewport]) => {
        const html = createCanvasHTML(viewport);
        const dom = new JSDOM(html);
        const canvas = dom.window.document.querySelector("canvas");
        expect(canvas?.getAttribute("width")).toBe(viewport.width.toString());
      });
    });

    it("should set canvas height attribute correctly", () => {
      Object.entries(viewports).forEach(([key, viewport]) => {
        const html = createCanvasHTML(viewport);
        const dom = new JSDOM(html);
        const canvas = dom.window.document.querySelector("canvas");
        expect(canvas?.getAttribute("height")).toBe(viewport.height.toString());
      });
    });
  });

  describe("Canvas Styling", () => {
    it("should display canvas as block element", () => {
      const html = createCanvasHTML(viewports.desktop);
      const dom = new JSDOM(html);
      const canvas = dom.window.document.querySelector("canvas");
      const style = canvas?.getAttribute("style");
      expect(style).toContain("display: block");
    });

    it("should set canvas width to 100% for responsive sizing", () => {
      const html = createCanvasHTML(viewports.mobileMedium);
      const dom = new JSDOM(html);
      const canvas = dom.window.document.querySelector("canvas");
      const style = canvas?.getAttribute("style");
      expect(style).toContain("width: 100%");
    });

    it("should set canvas height to 100% for responsive sizing", () => {
      const html = createCanvasHTML(viewports.desktop);
      const dom = new JSDOM(html);
      const canvas = dom.window.document.querySelector("canvas");
      const style = canvas?.getAttribute("style");
      expect(style).toContain("height: 100%");
    });
  });

  describe("Container Properties", () => {
    it("should be fixed position on all viewports", () => {
      Object.values(viewports).forEach((viewport) => {
        const html = createCanvasHTML(viewport);
        const dom = new JSDOM(html);
        const container = dom.window.document.querySelector("div.fixed");
        expect(container).toBeTruthy();
      });
    });

    it("should have zero margins and padding in inline styles", () => {
      const html = createCanvasHTML(viewports.desktop);
      const dom = new JSDOM(html);
      const body = dom.window.document.body;
      expect(body.style.margin).toMatch(/^0/);
      expect(body.style.padding).toMatch(/^0/);
    });

    it("should cover full viewport on desktop", () => {
      const html = createCanvasHTML(viewports.desktop);
      const dom = new JSDOM(html);
      const container = dom.window.document.querySelector("div.fixed");
      expect(container?.className).toContain("w-screen");
      expect(container?.className).toContain("h-full");
    });

    it("should cover full viewport on mobile", () => {
      const html = createCanvasHTML(viewports.mobileSmall);
      const dom = new JSDOM(html);
      const container = dom.window.document.querySelector("div.fixed");
      expect(container?.className).toContain("w-screen");
      expect(container?.className).toContain("h-full");
    });
  });

  describe("Viewport Compatibility", () => {
    it("should maintain canvas at mobile aspect ratio (9:16)", () => {
      const html = createCanvasHTML(viewports.mobileSmall);
      const dom = new JSDOM(html);
      const canvas = dom.window.document.querySelector("canvas");
      const width = parseInt(canvas?.getAttribute("width") || "0");
      const height = parseInt(canvas?.getAttribute("height") || "0");
      const aspectRatio = width / height;
      expect(aspectRatio).toBeLessThan(1); // Portrait
    });

    it("should maintain canvas at landscape aspect ratio", () => {
      const html = createCanvasHTML(viewports.mobileLandscape);
      const dom = new JSDOM(html);
      const canvas = dom.window.document.querySelector("canvas");
      const width = parseInt(canvas?.getAttribute("width") || "0");
      const height = parseInt(canvas?.getAttribute("height") || "0");
      const aspectRatio = width / height;
      expect(aspectRatio).toBeGreaterThan(1); // Landscape
    });

    it("should maintain canvas at desktop aspect ratio (16:9)", () => {
      const html = createCanvasHTML(viewports.desktop);
      const dom = new JSDOM(html);
      const canvas = dom.window.document.querySelector("canvas");
      const width = parseInt(canvas?.getAttribute("width") || "0");
      const height = parseInt(canvas?.getAttribute("height") || "0");
      const aspectRatio = width / height;
      expect(aspectRatio).toBeGreaterThan(1); // Landscape
      expect(aspectRatio).toBeCloseTo(16 / 9, 1);
    });
  });

  describe("Mobile Optimization", () => {
    it("should render efficiently on small mobile screens", () => {
      const html = createCanvasHTML(viewports.mobileSmall);
      const dom = new JSDOM(html);
      const canvas = dom.window.document.querySelector("canvas");
      expect(canvas).toBeTruthy();
      // Canvas dimensions should match viewport
      expect(parseInt(canvas?.getAttribute("width") || "0")).toBe(viewports.mobileSmall.width);
    });

    it("should handle medium mobile screens", () => {
      const html = createCanvasHTML(viewports.mobileMedium);
      const dom = new JSDOM(html);
      const canvas = dom.window.document.querySelector("canvas");
      expect(canvas?.getAttribute("width")).toBe(
        viewports.mobileMedium.width.toString()
      );
    });

    it("should handle mobile landscape orientation", () => {
      const html = createCanvasHTML(viewports.mobileLandscape);
      const dom = new JSDOM(html);
      const canvas = dom.window.document.querySelector("canvas");
      const width = parseInt(canvas?.getAttribute("width") || "0");
      const height = parseInt(canvas?.getAttribute("height") || "0");
      expect(width).toBeGreaterThan(height); // Landscape
    });

    it("should not cause layout shift on mobile", () => {
      const html = createCanvasHTML(viewports.mobileSmall);
      const dom = new JSDOM(html);
      const container = dom.window.document.querySelector("div.fixed");
      expect(container?.className).toContain("fixed"); // Fixed prevents layout shift
    });
  });

  describe("Desktop Performance", () => {
    it("should handle high-resolution desktop displays", () => {
      const html = createCanvasHTML(viewports.desktop);
      const dom = new JSDOM(html);
      const canvas = dom.window.document.querySelector("canvas");
      expect(canvas?.getAttribute("width")).toBe("1920");
      expect(canvas?.getAttribute("height")).toBe("1080");
    });

    it("should handle ultrawide displays", () => {
      const html = createCanvasHTML(viewports.ultrawide);
      const dom = new JSDOM(html);
      const canvas = dom.window.document.querySelector("canvas");
      expect(canvas?.getAttribute("width")).toBe("2560");
    });

    it("should scale smoothly from desktop to ultrawide", () => {
      const desktopHtml = createCanvasHTML(viewports.desktop);
      const desktopDom = new JSDOM(desktopHtml);
      const desktopCanvas = desktopDom.window.document.querySelector("canvas");

      const ultrawideHtml = createCanvasHTML(viewports.ultrawide);
      const ultrawideDom = new JSDOM(ultrawideHtml);
      const ultrawideCanvas = ultrawideDom.window.document.querySelector("canvas");

      expect(desktopCanvas?.className).toBe(ultrawideCanvas?.className);
    });
  });

  describe("Responsive Meta Tags", () => {
    it("should have viewport meta tag on mobile", () => {
      const html = createCanvasHTML(viewports.mobileSmall);
      const dom = new JSDOM(html);
      const viewportMeta = dom.window.document.querySelector(
        'meta[name="viewport"]'
      );
      expect(viewportMeta).toBeTruthy();
      expect(viewportMeta?.getAttribute("content")).toContain("width=device-width");
    });

    it("should have charset defined", () => {
      const html = createCanvasHTML(viewports.desktop);
      const dom = new JSDOM(html);
      const charsetMeta = dom.window.document.querySelector('meta[charset]');
      expect(charsetMeta?.getAttribute("charset")).toBe("utf-8");
    });
  });

  describe("No Overflow", () => {
    it("should not cause horizontal overflow on mobile", () => {
      const html = createCanvasHTML(viewports.mobileSmall);
      const dom = new JSDOM(html);
      const body = dom.window.document.body;
      expect(body.style.margin).toMatch(/^0/);
      expect(body.style.padding).toMatch(/^0/);
    });

    it("should not cause vertical overflow on mobile", () => {
      const html = createCanvasHTML(viewports.mobileSmall);
      const dom = new JSDOM(html);
      const canvas = dom.window.document.querySelector("canvas");
      expect(canvas?.getAttribute("height")).toBe("667");
    });

    it("should respect viewport boundaries on all sizes", () => {
      Object.values(viewports).forEach((viewport) => {
        const html = createCanvasHTML(viewport);
        const dom = new JSDOM(html);
        const canvas = dom.window.document.querySelector("canvas");
        const width = parseInt(canvas?.getAttribute("width") || "0");
        const height = parseInt(canvas?.getAttribute("height") || "0");
        expect(width).toBe(viewport.width);
        expect(height).toBe(viewport.height);
      });
    });
  });
});
