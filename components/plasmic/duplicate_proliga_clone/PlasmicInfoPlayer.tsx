// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tDWy3GXn2mzd9e2xUaPdmu
// Component: Ff8zfK0Tf7qO

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: tDWy3GXn2mzd9e2xUaPdmu/projectcss
import sty from "./PlasmicInfoPlayer.module.css"; // plasmic-import: Ff8zfK0Tf7qO/css

createPlasmicElementProxy;

export type PlasmicInfoPlayer__VariantMembers = {
  courtua: "courtua";
  gimenez: "gimenez";
  traore: "traore";
  ardaGuler: "ardaGuler";
  ayozePerez: "ayozePerez";
  budimir: "budimir";
  ceballos: "ceballos";
  davidGarcia: "davidGarcia";
  deGalarreta: "deGalarreta";
  deJong: "deJong";
  deLeon: "deLeon";
  franGarcia: "franGarcia";
  isaac: "isaac";
};
export type PlasmicInfoPlayer__VariantsArgs = {
  courtua?: SingleBooleanChoiceArg<"courtua">;
  gimenez?: SingleBooleanChoiceArg<"gimenez">;
  traore?: SingleBooleanChoiceArg<"traore">;
  ardaGuler?: SingleBooleanChoiceArg<"ardaGuler">;
  ayozePerez?: SingleBooleanChoiceArg<"ayozePerez">;
  budimir?: SingleBooleanChoiceArg<"budimir">;
  ceballos?: SingleBooleanChoiceArg<"ceballos">;
  davidGarcia?: SingleBooleanChoiceArg<"davidGarcia">;
  deGalarreta?: SingleBooleanChoiceArg<"deGalarreta">;
  deJong?: SingleBooleanChoiceArg<"deJong">;
  deLeon?: SingleBooleanChoiceArg<"deLeon">;
  franGarcia?: SingleBooleanChoiceArg<"franGarcia">;
  isaac?: SingleBooleanChoiceArg<"isaac">;
};
type VariantPropType = keyof PlasmicInfoPlayer__VariantsArgs;
export const PlasmicInfoPlayer__VariantProps = new Array<VariantPropType>(
  "courtua",
  "gimenez",
  "traore",
  "ardaGuler",
  "ayozePerez",
  "budimir",
  "ceballos",
  "davidGarcia",
  "deGalarreta",
  "deJong",
  "deLeon",
  "franGarcia",
  "isaac"
);

export type PlasmicInfoPlayer__ArgsType = {};
type ArgPropType = keyof PlasmicInfoPlayer__ArgsType;
export const PlasmicInfoPlayer__ArgProps = new Array<ArgPropType>();

export type PlasmicInfoPlayer__OverridesType = {
  root?: Flex__<"div">;
  link?: Flex__<"a"> & Partial<LinkProps>;
};

export interface DefaultInfoPlayerProps {
  courtua?: SingleBooleanChoiceArg<"courtua">;
  gimenez?: SingleBooleanChoiceArg<"gimenez">;
  traore?: SingleBooleanChoiceArg<"traore">;
  ardaGuler?: SingleBooleanChoiceArg<"ardaGuler">;
  ayozePerez?: SingleBooleanChoiceArg<"ayozePerez">;
  budimir?: SingleBooleanChoiceArg<"budimir">;
  ceballos?: SingleBooleanChoiceArg<"ceballos">;
  davidGarcia?: SingleBooleanChoiceArg<"davidGarcia">;
  deGalarreta?: SingleBooleanChoiceArg<"deGalarreta">;
  deJong?: SingleBooleanChoiceArg<"deJong">;
  deLeon?: SingleBooleanChoiceArg<"deLeon">;
  franGarcia?: SingleBooleanChoiceArg<"franGarcia">;
  isaac?: SingleBooleanChoiceArg<"isaac">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicInfoPlayer__RenderFunc(props: {
  variants: PlasmicInfoPlayer__VariantsArgs;
  args: PlasmicInfoPlayer__ArgsType;
  overrides: PlasmicInfoPlayer__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "courtua",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.courtua
      },
      {
        path: "gimenez",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.gimenez
      },
      {
        path: "traore",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.traore
      },
      {
        path: "ardaGuler",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.ardaGuler
      },
      {
        path: "ayozePerez",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.ayozePerez
      },
      {
        path: "budimir",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.budimir
      },
      {
        path: "ceballos",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.ceballos
      },
      {
        path: "davidGarcia",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.davidGarcia
      },
      {
        path: "deGalarreta",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.deGalarreta
      },
      {
        path: "deJong",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.deJong
      },
      {
        path: "deLeon",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.deLeon
      },
      {
        path: "franGarcia",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.franGarcia
      },
      {
        path: "isaac",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isaac
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.root,
        {
          [sty.rootdeJong]: hasVariant($state, "deJong", "deJong"),
          [sty.rootisaac]: hasVariant($state, "isaac", "isaac")
        }
      )}
    >
      <div className={classNames(projectcss.all, sty.freeBox__hZXy9)}>
        <PlasmicImg__
          alt={""}
          className={classNames(sty.img__htr3Q, {
            [sty.imgardaGuler__htr3QzUkwu]: hasVariant(
              $state,
              "ardaGuler",
              "ardaGuler"
            ),
            [sty.imgayozePerez__htr3QeIkCa]: hasVariant(
              $state,
              "ayozePerez",
              "ayozePerez"
            ),
            [sty.imgbudimir__htr3QnByFg]: hasVariant(
              $state,
              "budimir",
              "budimir"
            ),
            [sty.imgceballos__htr3QdLc9P]: hasVariant(
              $state,
              "ceballos",
              "ceballos"
            ),
            [sty.imgcourtua__htr3Qdyic7]: hasVariant(
              $state,
              "courtua",
              "courtua"
            ),
            [sty.imgdavidGarcia__htr3QBGr]: hasVariant(
              $state,
              "davidGarcia",
              "davidGarcia"
            ),
            [sty.imgdeGalarreta__htr3QPxnN]: hasVariant(
              $state,
              "deGalarreta",
              "deGalarreta"
            ),
            [sty.imgdeJong__htr3QqPyXg]: hasVariant($state, "deJong", "deJong"),
            [sty.imgdeLeon__htr3Qf1Zrw]: hasVariant($state, "deLeon", "deLeon"),
            [sty.imgdeLeon_franGarcia__htr3Qf1ZrwT469B]:
              hasVariant($state, "franGarcia", "franGarcia") &&
              hasVariant($state, "deLeon", "deLeon"),
            [sty.imgfranGarcia__htr3Qt469B]: hasVariant(
              $state,
              "franGarcia",
              "franGarcia"
            ),
            [sty.imggimenez__htr3Q3SqXq]: hasVariant(
              $state,
              "gimenez",
              "gimenez"
            ),
            [sty.imgisaac__htr3QwqGeM]: hasVariant($state, "isaac", "isaac"),
            [sty.imgtraore__htr3QjGymo]: hasVariant($state, "traore", "traore")
          })}
          displayHeight={"auto"}
          displayMaxHeight={"none"}
          displayMaxWidth={"100%"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"214px"}
          loading={"lazy"}
          src={
            hasVariant($state, "isaac", "isaac")
              ? {
                  src: "/plasmic/duplicate_proliga_clone/images/isaacpng.png",
                  fullWidth: 256,
                  fullHeight: 256,
                  aspectRatio: undefined
                }
              : hasVariant($state, "franGarcia", "franGarcia")
              ? {
                  src: "/plasmic/duplicate_proliga_clone/images/franGarciapng.png",
                  fullWidth: 256,
                  fullHeight: 256,
                  aspectRatio: undefined
                }
              : hasVariant($state, "deLeon", "deLeon")
              ? {
                  src: "/plasmic/duplicate_proliga_clone/images/deLeonpng.png",
                  fullWidth: 256,
                  fullHeight: 256,
                  aspectRatio: undefined
                }
              : hasVariant($state, "deJong", "deJong")
              ? {
                  src: "/plasmic/duplicate_proliga_clone/images/deJongpng.png",
                  fullWidth: 256,
                  fullHeight: 256,
                  aspectRatio: undefined
                }
              : hasVariant($state, "deGalarreta", "deGalarreta")
              ? {
                  src: "/plasmic/duplicate_proliga_clone/images/deGalarretapng.png",
                  fullWidth: 256,
                  fullHeight: 256,
                  aspectRatio: undefined
                }
              : hasVariant($state, "davidGarcia", "davidGarcia")
              ? {
                  src: "/plasmic/duplicate_proliga_clone/images/davidGarciapng.png",
                  fullWidth: 256,
                  fullHeight: 256,
                  aspectRatio: undefined
                }
              : hasVariant($state, "ceballos", "ceballos")
              ? {
                  src: "/plasmic/duplicate_proliga_clone/images/ceballospng.png",
                  fullWidth: 256,
                  fullHeight: 256,
                  aspectRatio: undefined
                }
              : hasVariant($state, "budimir", "budimir")
              ? {
                  src: "/plasmic/duplicate_proliga_clone/images/budimirpng.png",
                  fullWidth: 256,
                  fullHeight: 256,
                  aspectRatio: undefined
                }
              : hasVariant($state, "ayozePerez", "ayozePerez")
              ? {
                  src: "/plasmic/duplicate_proliga_clone/images/ayozePerezpng.png",
                  fullWidth: 256,
                  fullHeight: 256,
                  aspectRatio: undefined
                }
              : hasVariant($state, "ardaGuler", "ardaGuler")
              ? {
                  src: "/plasmic/duplicate_proliga_clone/images/ardaGulerpng.png",
                  fullWidth: 256,
                  fullHeight: 256,
                  aspectRatio: undefined
                }
              : hasVariant($state, "traore", "traore")
              ? {
                  src: "/plasmic/duplicate_proliga_clone/images/traorepng.png",
                  fullWidth: 256,
                  fullHeight: 256,
                  aspectRatio: undefined
                }
              : hasVariant($state, "gimenez", "gimenez")
              ? {
                  src: "/plasmic/duplicate_proliga_clone/images/gimenezpng.png",
                  fullWidth: 256,
                  fullHeight: 256,
                  aspectRatio: undefined
                }
              : hasVariant($state, "courtua", "courtua")
              ? {
                  src: "/plasmic/duplicate_proliga_clone/images/courtuapng.png",
                  fullWidth: 256,
                  fullHeight: 256,
                  aspectRatio: undefined
                }
              : {
                  src: "/plasmic/duplicate_proliga_clone/images/borjaMayoralpng.png",
                  fullWidth: 256,
                  fullHeight: 256,
                  aspectRatio: undefined
                }
          }
        />
      </div>
      <div className={classNames(projectcss.all, sty.freeBox__z8Ios)}>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__sz3Z6
          )}
        >
          {"Position"}
        </div>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__ql02V,
            {
              [sty.textgimenez__ql02V3SqXq]: hasVariant(
                $state,
                "gimenez",
                "gimenez"
              )
            }
          )}
        >
          {"FSYP"}
        </div>
      </div>
      <div
        className={classNames(projectcss.all, sty.freeBox__poha5, {
          [sty.freeBoxcourtua__poha5Dyic7]: hasVariant(
            $state,
            "courtua",
            "courtua"
          ),
          [sty.freeBoxdeLeon__poha5F1Zrw]: hasVariant(
            $state,
            "deLeon",
            "deLeon"
          ),
          [sty.freeBoxtraore__poha5JGymo]: hasVariant(
            $state,
            "traore",
            "traore"
          )
        })}
      >
        <PlasmicLink__
          data-plasmic-name={"link"}
          data-plasmic-override={overrides.link}
          className={classNames(
            projectcss.all,
            projectcss.a,
            projectcss.__wab_text,
            sty.link
          )}
          component={Link}
          href={"https://www.plasmic.app/"}
          platform={"nextjs"}
        >
          {"STR"}
        </PlasmicLink__>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text___9Mkyi,
            {
              [sty.textardaGuler___9MkyiZUkwu]: hasVariant(
                $state,
                "ardaGuler",
                "ardaGuler"
              ),
              [sty.textayozePerez___9MkyiEIkCa]: hasVariant(
                $state,
                "ayozePerez",
                "ayozePerez"
              ),
              [sty.textbudimir___9MkyiNByFg]: hasVariant(
                $state,
                "budimir",
                "budimir"
              ),
              [sty.textceballos___9MkyiDLc9P]: hasVariant(
                $state,
                "ceballos",
                "ceballos"
              ),
              [sty.textcourtua___9MkyiDyic7]: hasVariant(
                $state,
                "courtua",
                "courtua"
              ),
              [sty.textdavidGarcia___9MkyiBGr]: hasVariant(
                $state,
                "davidGarcia",
                "davidGarcia"
              ),
              [sty.textdeGalarreta___9MkyiPxnN]: hasVariant(
                $state,
                "deGalarreta",
                "deGalarreta"
              ),
              [sty.textdeJong___9MkyiqPyXg]: hasVariant(
                $state,
                "deJong",
                "deJong"
              ),
              [sty.textdeLeon___9MkyiF1Zrw]: hasVariant(
                $state,
                "deLeon",
                "deLeon"
              ),
              [sty.textfranGarcia___9Mkyit469B]: hasVariant(
                $state,
                "franGarcia",
                "franGarcia"
              ),
              [sty.textgimenez___9Mkyi3SqXq]: hasVariant(
                $state,
                "gimenez",
                "gimenez"
              ),
              [sty.textisaac___9MkyiWqGeM]: hasVariant(
                $state,
                "isaac",
                "isaac"
              ),
              [sty.texttraore___9MkyijGymo]: hasVariant(
                $state,
                "traore",
                "traore"
              )
            }
          )}
        >
          {hasVariant($state, "isaac", "isaac")
            ? "Isaac"
            : hasVariant($state, "franGarcia", "franGarcia")
            ? "Fran Garc\u00eda"
            : hasVariant($state, "deLeon", "deLeon")
            ? "De Leon"
            : hasVariant($state, "deJong", "deJong")
            ? "De Jong"
            : hasVariant($state, "deGalarreta", "deGalarreta")
            ? "De Galarreta"
            : hasVariant($state, "davidGarcia", "davidGarcia")
            ? "David Garc\u00eda"
            : hasVariant($state, "ceballos", "ceballos")
            ? "Ceballos"
            : hasVariant($state, "budimir", "budimir")
            ? "Budimir"
            : hasVariant($state, "ayozePerez", "ayozePerez")
            ? "Ayoze P\u00e9rez"
            : hasVariant($state, "ardaGuler", "ardaGuler")
            ? "Arda G\u00fcler"
            : hasVariant($state, "traore", "traore")
            ? "Traor\u00e9"
            : hasVariant($state, "gimenez", "gimenez")
            ? "Gim\u00e9nez"
            : hasVariant($state, "courtua", "courtua")
            ? "Courtua"
            : "Borja Mayoral"}
        </div>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__l9Dm9,
            {
              [sty.textardaGuler__l9Dm9ZUkwu]: hasVariant(
                $state,
                "ardaGuler",
                "ardaGuler"
              ),
              [sty.textayozePerez__l9Dm9EIkCa]: hasVariant(
                $state,
                "ayozePerez",
                "ayozePerez"
              ),
              [sty.textbudimir__l9Dm9NByFg]: hasVariant(
                $state,
                "budimir",
                "budimir"
              ),
              [sty.textceballos__l9Dm9DLc9P]: hasVariant(
                $state,
                "ceballos",
                "ceballos"
              ),
              [sty.textcourtua__l9Dm9Dyic7]: hasVariant(
                $state,
                "courtua",
                "courtua"
              ),
              [sty.textdavidGarcia__l9Dm9BGr]: hasVariant(
                $state,
                "davidGarcia",
                "davidGarcia"
              ),
              [sty.textdeGalarreta__l9Dm9PxnN]: hasVariant(
                $state,
                "deGalarreta",
                "deGalarreta"
              ),
              [sty.textdeJong__l9Dm9QPyXg]: hasVariant(
                $state,
                "deJong",
                "deJong"
              ),
              [sty.textdeLeon__l9Dm9F1Zrw]: hasVariant(
                $state,
                "deLeon",
                "deLeon"
              ),
              [sty.textfranGarcia__l9Dm9T469B]: hasVariant(
                $state,
                "franGarcia",
                "franGarcia"
              ),
              [sty.textgimenez__l9Dm93SqXq]: hasVariant(
                $state,
                "gimenez",
                "gimenez"
              ),
              [sty.textisaac__l9Dm9WqGeM]: hasVariant($state, "isaac", "isaac")
            }
          )}
          onClick={async event => {
            const $steps = {};

            $steps["updateStateVariable"] = true
              ? (() => {
                  const actionArgs = {};
                  return (({ variable, value, startIndex, deleteCount }) => {
                    if (!variable) {
                      return;
                    }
                    const { objRoot, variablePath } = variable;
                    undefined;
                  })?.apply(null, [actionArgs]);
                })()
              : undefined;
            if (
              $steps["updateStateVariable"] != null &&
              typeof $steps["updateStateVariable"] === "object" &&
              typeof $steps["updateStateVariable"].then === "function"
            ) {
              $steps["updateStateVariable"] = await $steps[
                "updateStateVariable"
              ];
            }
          }}
        >
          {hasVariant($state, "isaac", "isaac")
            ? "174"
            : hasVariant($state, "franGarcia", "franGarcia")
            ? "172"
            : hasVariant($state, "deLeon", "deLeon")
            ? "171"
            : hasVariant($state, "deJong", "deJong")
            ? "185"
            : hasVariant($state, "deGalarreta", "deGalarreta")
            ? "175"
            : hasVariant($state, "davidGarcia", "davidGarcia")
            ? "177"
            : hasVariant($state, "budimir", "budimir")
            ? "169"
            : hasVariant($state, "ayozePerez", "ayozePerez")
            ? "175"
            : hasVariant($state, "gimenez", "gimenez")
            ? "9"
            : hasVariant($state, "courtua", "courtua")
            ? "11"
            : "166"}
        </div>
      </div>
      <div className={classNames(projectcss.all, sty.freeBox__py5Pd)}>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__blVz7
          )}
        >
          {"Value"}
        </div>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__qEbx8
          )}
        >
          {"Average:"}
        </div>
      </div>
      <div
        className={classNames(projectcss.all, sty.freeBox__xsVZ, {
          [sty.freeBoxayozePerez__xsVZEIkCa]: hasVariant(
            $state,
            "ayozePerez",
            "ayozePerez"
          ),
          [sty.freeBoxdeGalarreta__xsVZPxnN]: hasVariant(
            $state,
            "deGalarreta",
            "deGalarreta"
          ),
          [sty.freeBoxgimenez__xsVZ3SqXq]: hasVariant(
            $state,
            "gimenez",
            "gimenez"
          ),
          [sty.freeBoxtraore__xsVZjGymo]: hasVariant($state, "traore", "traore")
        })}
      >
        <PlasmicImg__
          alt={""}
          className={classNames(sty.img__fbN5P)}
          displayHeight={"auto"}
          displayMaxHeight={"none"}
          displayMaxWidth={"100%"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"14px"}
          loading={"lazy"}
          src={{
            src: "/plasmic/duplicate_proliga_clone/images/pngtreeEuroSymbolCurrencyPngImage3974231Png2.png",
            fullWidth: 512,
            fullHeight: 512,
            aspectRatio: undefined
          }}
        />

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text___1C4Fm
          )}
        >
          {"8.175.716"}
        </div>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__eqml6,
            {
              [sty.textardaGuler__eqml6ZUkwu]: hasVariant(
                $state,
                "ardaGuler",
                "ardaGuler"
              ),
              [sty.textayozePerez__eqml6EIkCa]: hasVariant(
                $state,
                "ayozePerez",
                "ayozePerez"
              ),
              [sty.textbudimir__eqml6NByFg]: hasVariant(
                $state,
                "budimir",
                "budimir"
              ),
              [sty.textceballos__eqml6DLc9P]: hasVariant(
                $state,
                "ceballos",
                "ceballos"
              ),
              [sty.textcourtua__eqml6Dyic7]: hasVariant(
                $state,
                "courtua",
                "courtua"
              ),
              [sty.textdavidGarcia__eqml6BGr]: hasVariant(
                $state,
                "davidGarcia",
                "davidGarcia"
              ),
              [sty.textdeGalarreta__eqml6PxnN]: hasVariant(
                $state,
                "deGalarreta",
                "deGalarreta"
              ),
              [sty.textdeJong__eqml6QPyXg]: hasVariant(
                $state,
                "deJong",
                "deJong"
              ),
              [sty.textdeLeon__eqml6F1Zrw]: hasVariant(
                $state,
                "deLeon",
                "deLeon"
              ),
              [sty.textfranGarcia__eqml6T469B]: hasVariant(
                $state,
                "franGarcia",
                "franGarcia"
              ),
              [sty.textgimenez__eqml63SqXq]: hasVariant(
                $state,
                "gimenez",
                "gimenez"
              ),
              [sty.textisaac__eqml6WqGeM]: hasVariant($state, "isaac", "isaac"),
              [sty.texttraore__eqml6JGymo]: hasVariant(
                $state,
                "traore",
                "traore"
              )
            }
          )}
        >
          {hasVariant($state, "isaac", "isaac")
            ? "8,54"
            : hasVariant($state, "franGarcia", "franGarcia")
            ? "5,59"
            : hasVariant($state, "deLeon", "deLeon")
            ? "9,58"
            : hasVariant($state, "deJong", "deJong")
            ? "5,58"
            : hasVariant($state, "deGalarreta", "deGalarreta")
            ? "6,32"
            : hasVariant($state, "davidGarcia", "davidGarcia")
            ? "7,52"
            : hasVariant($state, "ceballos", "ceballos")
            ? "8,5"
            : hasVariant($state, "budimir", "budimir")
            ? "7,15"
            : hasVariant($state, "ayozePerez", "ayozePerez")
            ? "7.58"
            : hasVariant($state, "ardaGuler", "ardaGuler")
            ? "5.68"
            : hasVariant($state, "gimenez", "gimenez")
            ? "12"
            : hasVariant($state, "courtua", "courtua")
            ? "11"
            : "6,15"}
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "link"],
  link: ["link"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  link: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicInfoPlayer__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicInfoPlayer__VariantsArgs;
    args?: PlasmicInfoPlayer__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicInfoPlayer__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicInfoPlayer__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicInfoPlayer__ArgProps,
          internalVariantPropNames: PlasmicInfoPlayer__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicInfoPlayer__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicInfoPlayer";
  } else {
    func.displayName = `PlasmicInfoPlayer.${nodeName}`;
  }
  return func;
}

export const PlasmicInfoPlayer = Object.assign(
  // Top-level PlasmicInfoPlayer renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    link: makeNodeComponent("link"),

    // Metadata about props expected for PlasmicInfoPlayer
    internalVariantProps: PlasmicInfoPlayer__VariantProps,
    internalArgProps: PlasmicInfoPlayer__ArgProps
  }
);

export default PlasmicInfoPlayer;
/* prettier-ignore-end */