// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tDWy3GXn2mzd9e2xUaPdmu
// Component: 3I11SVbKzuHP

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

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: tDWy3GXn2mzd9e2xUaPdmu/projectcss
import sty from "./PlasmicIdealTeamMember.module.css"; // plasmic-import: 3I11SVbKzuHP/css

createPlasmicElementProxy;

export type PlasmicIdealTeamMember__VariantMembers = {
  sergioRamos: "sergioRamos";
  johnPache2: "johnPache2";
  mingueza: "mingueza";
  zakaryan: "zakaryan";
  ikerMundez: "ikerMundez";
  robertNav: "robertNav";
  alcaraz: "alcaraz";
  rodrygo: "rodrygo";
  dovbyk: "dovbyk";
  willianJose: "willianJose";
};
export type PlasmicIdealTeamMember__VariantsArgs = {
  sergioRamos?: SingleBooleanChoiceArg<"sergioRamos">;
  johnPache2?: SingleBooleanChoiceArg<"johnPache2">;
  mingueza?: SingleBooleanChoiceArg<"mingueza">;
  zakaryan?: SingleBooleanChoiceArg<"zakaryan">;
  ikerMundez?: SingleBooleanChoiceArg<"ikerMundez">;
  robertNav?: SingleBooleanChoiceArg<"robertNav">;
  alcaraz?: SingleBooleanChoiceArg<"alcaraz">;
  rodrygo?: SingleBooleanChoiceArg<"rodrygo">;
  dovbyk?: SingleBooleanChoiceArg<"dovbyk">;
  willianJose?: SingleBooleanChoiceArg<"willianJose">;
};
type VariantPropType = keyof PlasmicIdealTeamMember__VariantsArgs;
export const PlasmicIdealTeamMember__VariantProps = new Array<VariantPropType>(
  "sergioRamos",
  "johnPache2",
  "mingueza",
  "zakaryan",
  "ikerMundez",
  "robertNav",
  "alcaraz",
  "rodrygo",
  "dovbyk",
  "willianJose"
);

export type PlasmicIdealTeamMember__ArgsType = {};
type ArgPropType = keyof PlasmicIdealTeamMember__ArgsType;
export const PlasmicIdealTeamMember__ArgProps = new Array<ArgPropType>();

export type PlasmicIdealTeamMember__OverridesType = {
  root?: Flex__<"div">;
  freeBox?: Flex__<"div">;
  img?: Flex__<typeof PlasmicImg__>;
  text?: Flex__<"div">;
};

export interface DefaultIdealTeamMemberProps {
  sergioRamos?: SingleBooleanChoiceArg<"sergioRamos">;
  johnPache2?: SingleBooleanChoiceArg<"johnPache2">;
  mingueza?: SingleBooleanChoiceArg<"mingueza">;
  zakaryan?: SingleBooleanChoiceArg<"zakaryan">;
  ikerMundez?: SingleBooleanChoiceArg<"ikerMundez">;
  robertNav?: SingleBooleanChoiceArg<"robertNav">;
  alcaraz?: SingleBooleanChoiceArg<"alcaraz">;
  rodrygo?: SingleBooleanChoiceArg<"rodrygo">;
  dovbyk?: SingleBooleanChoiceArg<"dovbyk">;
  willianJose?: SingleBooleanChoiceArg<"willianJose">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicIdealTeamMember__RenderFunc(props: {
  variants: PlasmicIdealTeamMember__VariantsArgs;
  args: PlasmicIdealTeamMember__ArgsType;
  overrides: PlasmicIdealTeamMember__OverridesType;
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
        path: "sergioRamos",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.sergioRamos
      },
      {
        path: "johnPache2",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.johnPache2
      },
      {
        path: "mingueza",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.mingueza
      },
      {
        path: "zakaryan",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.zakaryan
      },
      {
        path: "ikerMundez",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.ikerMundez
      },
      {
        path: "robertNav",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.robertNav
      },
      {
        path: "alcaraz",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.alcaraz
      },
      {
        path: "rodrygo",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.rodrygo
      },
      {
        path: "dovbyk",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.dovbyk
      },
      {
        path: "willianJose",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.willianJose
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
          [sty.rootalcaraz]: hasVariant($state, "alcaraz", "alcaraz"),
          [sty.rootdovbyk]: hasVariant($state, "dovbyk", "dovbyk"),
          [sty.rootikerMundez]: hasVariant($state, "ikerMundez", "ikerMundez"),
          [sty.rootjohnPache2]: hasVariant($state, "johnPache2", "johnPache2"),
          [sty.rootmingueza]: hasVariant($state, "mingueza", "mingueza"),
          [sty.rootrobertNav]: hasVariant($state, "robertNav", "robertNav"),
          [sty.rootrodrygo]: hasVariant($state, "rodrygo", "rodrygo"),
          [sty.rootsergioRamos]: hasVariant(
            $state,
            "sergioRamos",
            "sergioRamos"
          ),
          [sty.rootwillianJose]: hasVariant(
            $state,
            "willianJose",
            "willianJose"
          ),
          [sty.rootzakaryan]: hasVariant($state, "zakaryan", "zakaryan")
        }
      )}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        <PlasmicImg__
          data-plasmic-name={"img"}
          data-plasmic-override={overrides.img}
          alt={""}
          className={classNames(sty.img, {
            [sty.imgalcaraz]: hasVariant($state, "alcaraz", "alcaraz"),
            [sty.imgdovbyk]: hasVariant($state, "dovbyk", "dovbyk"),
            [sty.imgikerMundez]: hasVariant($state, "ikerMundez", "ikerMundez"),
            [sty.imgikerMundez_johnPache2]:
              hasVariant($state, "ikerMundez", "ikerMundez") &&
              hasVariant($state, "johnPache2", "johnPache2"),
            [sty.imgikerMundez_johnPache2_mingueza]:
              hasVariant($state, "ikerMundez", "ikerMundez") &&
              hasVariant($state, "johnPache2", "johnPache2") &&
              hasVariant($state, "mingueza", "mingueza"),
            [sty.imgikerMundez_johnPache2_mingueza_sergioRamos]:
              hasVariant($state, "ikerMundez", "ikerMundez") &&
              hasVariant($state, "johnPache2", "johnPache2") &&
              hasVariant($state, "mingueza", "mingueza") &&
              hasVariant($state, "sergioRamos", "sergioRamos"),
            [sty.imgikerMundez_johnPache2_zakaryan_mingueza_sergioRamos]:
              hasVariant($state, "ikerMundez", "ikerMundez") &&
              hasVariant($state, "johnPache2", "johnPache2") &&
              hasVariant($state, "mingueza", "mingueza") &&
              hasVariant($state, "sergioRamos", "sergioRamos") &&
              hasVariant($state, "zakaryan", "zakaryan"),
            [sty.imgikerMundez_robertNav_johnPache2_zakaryan_mingueza_alcaraz_sergioRamos]:
              hasVariant($state, "ikerMundez", "ikerMundez") &&
              hasVariant($state, "johnPache2", "johnPache2") &&
              hasVariant($state, "mingueza", "mingueza") &&
              hasVariant($state, "sergioRamos", "sergioRamos") &&
              hasVariant($state, "zakaryan", "zakaryan") &&
              hasVariant($state, "robertNav", "robertNav") &&
              hasVariant($state, "alcaraz", "alcaraz"),
            [sty.imgikerMundez_robertNav_johnPache2_zakaryan_mingueza_sergioRamos]:
              hasVariant($state, "ikerMundez", "ikerMundez") &&
              hasVariant($state, "johnPache2", "johnPache2") &&
              hasVariant($state, "mingueza", "mingueza") &&
              hasVariant($state, "sergioRamos", "sergioRamos") &&
              hasVariant($state, "zakaryan", "zakaryan") &&
              hasVariant($state, "robertNav", "robertNav"),
            [sty.imgjohnPache2]: hasVariant($state, "johnPache2", "johnPache2"),
            [sty.imgmingueza]: hasVariant($state, "mingueza", "mingueza"),
            [sty.imgrobertNav]: hasVariant($state, "robertNav", "robertNav"),
            [sty.imgrodrygo]: hasVariant($state, "rodrygo", "rodrygo"),
            [sty.imgrodrygo_ikerMundez_robertNav_johnPache2_zakaryan_mingueza_alcaraz_sergioRamos]:
              hasVariant($state, "ikerMundez", "ikerMundez") &&
              hasVariant($state, "johnPache2", "johnPache2") &&
              hasVariant($state, "mingueza", "mingueza") &&
              hasVariant($state, "sergioRamos", "sergioRamos") &&
              hasVariant($state, "zakaryan", "zakaryan") &&
              hasVariant($state, "robertNav", "robertNav") &&
              hasVariant($state, "alcaraz", "alcaraz") &&
              hasVariant($state, "rodrygo", "rodrygo"),
            [sty.imgrodrygo_ikerMundez_robertNav_johnPache2_zakaryan_mingueza_alcaraz_sergioRamos_dovbyk]:
              hasVariant($state, "ikerMundez", "ikerMundez") &&
              hasVariant($state, "johnPache2", "johnPache2") &&
              hasVariant($state, "mingueza", "mingueza") &&
              hasVariant($state, "sergioRamos", "sergioRamos") &&
              hasVariant($state, "zakaryan", "zakaryan") &&
              hasVariant($state, "robertNav", "robertNav") &&
              hasVariant($state, "alcaraz", "alcaraz") &&
              hasVariant($state, "rodrygo", "rodrygo") &&
              hasVariant($state, "dovbyk", "dovbyk"),
            [sty.imgrodrygo_ikerMundez_robertNav_johnPache2_zakaryan_mingueza_alcaraz_sergioRamos_willianJose_dovbyk]:
              hasVariant($state, "ikerMundez", "ikerMundez") &&
              hasVariant($state, "johnPache2", "johnPache2") &&
              hasVariant($state, "mingueza", "mingueza") &&
              hasVariant($state, "sergioRamos", "sergioRamos") &&
              hasVariant($state, "zakaryan", "zakaryan") &&
              hasVariant($state, "robertNav", "robertNav") &&
              hasVariant($state, "alcaraz", "alcaraz") &&
              hasVariant($state, "rodrygo", "rodrygo") &&
              hasVariant($state, "dovbyk", "dovbyk") &&
              hasVariant($state, "willianJose", "willianJose"),
            [sty.imgrodrygo_ikerMundez_robertNav_johnPache2_zakaryan_mingueza_sergioRamos_willianJose_dovbyk]:
              hasVariant($state, "ikerMundez", "ikerMundez") &&
              hasVariant($state, "johnPache2", "johnPache2") &&
              hasVariant($state, "mingueza", "mingueza") &&
              hasVariant($state, "sergioRamos", "sergioRamos") &&
              hasVariant($state, "zakaryan", "zakaryan") &&
              hasVariant($state, "robertNav", "robertNav") &&
              hasVariant($state, "rodrygo", "rodrygo") &&
              hasVariant($state, "dovbyk", "dovbyk") &&
              hasVariant($state, "willianJose", "willianJose"),
            [sty.imgsergioRamos]: hasVariant(
              $state,
              "sergioRamos",
              "sergioRamos"
            ),
            [sty.imgwillianJose]: hasVariant(
              $state,
              "willianJose",
              "willianJose"
            ),
            [sty.imgzakaryan]: hasVariant($state, "zakaryan", "zakaryan")
          })}
          displayHeight={"67px"}
          displayMaxHeight={"none"}
          displayMaxWidth={"100%"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"68.93px"}
          loading={"lazy"}
          src={
            hasVariant($state, "willianJose", "willianJose")
              ? {
                  src: "/plasmic/duplicate_proliga_clone/images/willianJosepng.png",
                  fullWidth: 256,
                  fullHeight: 256,
                  aspectRatio: undefined
                }
              : hasVariant($state, "dovbyk", "dovbyk")
              ? {
                  src: "/plasmic/duplicate_proliga_clone/images/dovbykpng.png",
                  fullWidth: 256,
                  fullHeight: 256,
                  aspectRatio: undefined
                }
              : hasVariant($state, "rodrygo", "rodrygo")
              ? {
                  src: "/plasmic/duplicate_proliga_clone/images/rodrygopng.png",
                  fullWidth: 256,
                  fullHeight: 256,
                  aspectRatio: undefined
                }
              : hasVariant($state, "alcaraz", "alcaraz")
              ? {
                  src: "/plasmic/duplicate_proliga_clone/images/alcarazpng.png",
                  fullWidth: 256,
                  fullHeight: 256,
                  aspectRatio: undefined
                }
              : hasVariant($state, "robertNav", "robertNav")
              ? {
                  src: "/plasmic/duplicate_proliga_clone/images/robertNavpng.png",
                  fullWidth: 256,
                  fullHeight: 256,
                  aspectRatio: undefined
                }
              : hasVariant($state, "ikerMundez", "ikerMundez")
              ? {
                  src: "/plasmic/duplicate_proliga_clone/images/ikerMunofizpng.png",
                  fullWidth: 256,
                  fullHeight: 256,
                  aspectRatio: undefined
                }
              : hasVariant($state, "zakaryan", "zakaryan")
              ? {
                  src: "/plasmic/duplicate_proliga_clone/images/zahkaryanpng.png",
                  fullWidth: 256,
                  fullHeight: 256,
                  aspectRatio: undefined
                }
              : hasVariant($state, "mingueza", "mingueza")
              ? {
                  src: "/plasmic/duplicate_proliga_clone/images/miguezapng.png",
                  fullWidth: 256,
                  fullHeight: 256,
                  aspectRatio: undefined
                }
              : hasVariant($state, "johnPache2", "johnPache2")
              ? {
                  src: "/plasmic/duplicate_proliga_clone/images/johnPachepng.png",
                  fullWidth: 256,
                  fullHeight: 256,
                  aspectRatio: undefined
                }
              : hasVariant($state, "sergioRamos", "sergioRamos")
              ? {
                  src: "/plasmic/duplicate_proliga_clone/images/ramospng.png",
                  fullWidth: 256,
                  fullHeight: 256,
                  aspectRatio: undefined
                }
              : {
                  src: "/plasmic/duplicate_proliga_clone/images/sergioHerpng.png",
                  fullWidth: 256,
                  fullHeight: 256,
                  aspectRatio: undefined
                }
          }
        />

        <div
          data-plasmic-name={"text"}
          data-plasmic-override={overrides.text}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text,
            {
              [sty.textalcaraz]: hasVariant($state, "alcaraz", "alcaraz"),
              [sty.textdovbyk]: hasVariant($state, "dovbyk", "dovbyk"),
              [sty.textikerMundez]: hasVariant(
                $state,
                "ikerMundez",
                "ikerMundez"
              ),
              [sty.textjohnPache2]: hasVariant(
                $state,
                "johnPache2",
                "johnPache2"
              ),
              [sty.textmingueza]: hasVariant($state, "mingueza", "mingueza"),
              [sty.textrobertNav]: hasVariant($state, "robertNav", "robertNav"),
              [sty.textrodrygo]: hasVariant($state, "rodrygo", "rodrygo"),
              [sty.textsergioRamos]: hasVariant(
                $state,
                "sergioRamos",
                "sergioRamos"
              ),
              [sty.textwillianJose]: hasVariant(
                $state,
                "willianJose",
                "willianJose"
              ),
              [sty.textzakaryan]: hasVariant($state, "zakaryan", "zakaryan")
            }
          )}
        >
          {hasVariant($state, "willianJose", "willianJose")
            ? "Willian Jos\u00e9"
            : hasVariant($state, "dovbyk", "dovbyk")
            ? "Dovbyk"
            : hasVariant($state, "rodrygo", "rodrygo")
            ? "Rodrygo"
            : hasVariant($state, "alcaraz", "alcaraz")
            ? "Alcaraz"
            : hasVariant($state, "robertNav", "robertNav")
            ? "Robert Nav"
            : hasVariant($state, "ikerMundez", "ikerMundez")
            ? "Iker Munofiz"
            : hasVariant($state, "zakaryan", "zakaryan")
            ? "Zahkaryan"
            : hasVariant($state, "mingueza", "mingueza")
            ? "Mingueza"
            : hasVariant($state, "johnPache2", "johnPache2")
            ? "John Pache"
            : hasVariant($state, "sergioRamos", "sergioRamos")
            ? "Sergio Ramos"
            : "Sergio Herr..."}
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "img", "text"],
  freeBox: ["freeBox", "img", "text"],
  img: ["img"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  img: typeof PlasmicImg__;
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicIdealTeamMember__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicIdealTeamMember__VariantsArgs;
    args?: PlasmicIdealTeamMember__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicIdealTeamMember__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicIdealTeamMember__ArgsType,
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
          internalArgPropNames: PlasmicIdealTeamMember__ArgProps,
          internalVariantPropNames: PlasmicIdealTeamMember__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicIdealTeamMember__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicIdealTeamMember";
  } else {
    func.displayName = `PlasmicIdealTeamMember.${nodeName}`;
  }
  return func;
}

export const PlasmicIdealTeamMember = Object.assign(
  // Top-level PlasmicIdealTeamMember renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    img: makeNodeComponent("img"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicIdealTeamMember
    internalVariantProps: PlasmicIdealTeamMember__VariantProps,
    internalArgProps: PlasmicIdealTeamMember__ArgProps
  }
);

export default PlasmicIdealTeamMember;
/* prettier-ignore-end */
