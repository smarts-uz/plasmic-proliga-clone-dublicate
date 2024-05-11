// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import { PageParamsProvider as PageParamsProvider__ } from "@plasmicapp/react-web/lib/host";
import GlobalContextsProvider from "../components/plasmic/duplicate_proliga_clone/PlasmicGlobalContextsProvider";
import { ScreenVariantProvider } from "../components/plasmic/duplicate_proliga_clone/PlasmicGlobalVariant__Screen";
import { UnnamedGlobalGroupOfVariantsContext } from "../components/plasmic/duplicate_proliga_clone/PlasmicGlobalVariant__UnnamedGlobalGroupOfVariants";
import { PlasmicMatches } from "../components/plasmic/duplicate_proliga_clone/PlasmicMatches";
import { useRouter } from "next/router";

function Matches() {
  // Use PlasmicMatches to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicMatches are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, PlasmicMatches is wrapped by your project's global
  // variant context providers. These wrappers may be moved to
  // Next.js Custom App component
  // (https://nextjs.org/docs/advanced-features/custom-app).
  return (
    <UnnamedGlobalGroupOfVariantsContext.Provider value={undefined}>
      <GlobalContextsProvider>
        <PageParamsProvider__
          route={useRouter()?.pathname}
          params={useRouter()?.query}
          query={useRouter()?.query}
        >
          <PlasmicMatches />
        </PageParamsProvider__>
      </GlobalContextsProvider>
    </UnnamedGlobalGroupOfVariantsContext.Provider>
  );
}

export default Matches;
