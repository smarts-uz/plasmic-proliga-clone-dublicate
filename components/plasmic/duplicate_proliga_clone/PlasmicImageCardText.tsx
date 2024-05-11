// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tDWy3GXn2mzd9e2xUaPdmu
// Component: Fz11uI_xJ5_l

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
import sty from "./PlasmicImageCardText.module.css"; // plasmic-import: Fz11uI_xJ5_l/css

createPlasmicElementProxy;

export type PlasmicImageCardText__VariantMembers = {};
export type PlasmicImageCardText__VariantsArgs = {};
type VariantPropType = keyof PlasmicImageCardText__VariantsArgs;
export const PlasmicImageCardText__VariantProps = new Array<VariantPropType>();

export type PlasmicImageCardText__ArgsType = {};
type ArgPropType = keyof PlasmicImageCardText__ArgsType;
export const PlasmicImageCardText__ArgProps = new Array<ArgPropType>();

export type PlasmicImageCardText__OverridesType = {
  root?: Flex__<"div">;
  imagaeAndText?: Flex__<"div">;
  img?: Flex__<typeof PlasmicImg__>;
  freeBox?: Flex__<"div">;
  columns?: Flex__<"div">;
};

export interface DefaultImageCardTextProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicImageCardText__RenderFunc(props: {
  variants: PlasmicImageCardText__VariantsArgs;
  args: PlasmicImageCardText__ArgsType;
  overrides: PlasmicImageCardText__OverridesType;
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
        sty.root
      )}
    >
      <div
        data-plasmic-name={"imagaeAndText"}
        data-plasmic-override={overrides.imagaeAndText}
        className={classNames(projectcss.all, sty.imagaeAndText)}
      >
        <PlasmicImg__
          data-plasmic-name={"img"}
          data-plasmic-override={overrides.img}
          alt={""}
          className={classNames(sty.img)}
          displayHeight={"215px"}
          displayMaxHeight={"none"}
          displayMaxWidth={"100%"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"336px"}
          loading={"lazy"}
          src={{
            src: "/plasmic/duplicate_proliga_clone/images/_1350731Jpeg.jpg",
            fullWidth: 3840,
            fullHeight: 2160,
            aspectRatio: undefined
          }}
        />

        <div
          data-plasmic-name={"freeBox"}
          data-plasmic-override={overrides.freeBox}
          className={classNames(projectcss.all, sty.freeBox)}
        >
          <Stack__
            as={"div"}
            data-plasmic-name={"columns"}
            data-plasmic-override={overrides.columns}
            hasGap={true}
            className={classNames(projectcss.all, sty.columns)}
          >
            <div className={classNames(projectcss.all, sty.column___5Sv9E)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__qsKmw
                )}
              >
                {"NOTICIAS"}
              </div>
            </div>
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.column__rciNp)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__qOnL
                )}
              >
                {"1 DAY AGO"}
              </div>
            </Stack__>
          </Stack__>
        </div>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__hXghE
          )}
        >
          {"Alineaciones probables de la jornada 31 \nde LaLiga EA Sports"}
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "imagaeAndText", "img", "freeBox", "columns"],
  imagaeAndText: ["imagaeAndText", "img", "freeBox", "columns"],
  img: ["img"],
  freeBox: ["freeBox", "columns"],
  columns: ["columns"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  imagaeAndText: "div";
  img: typeof PlasmicImg__;
  freeBox: "div";
  columns: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicImageCardText__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicImageCardText__VariantsArgs;
    args?: PlasmicImageCardText__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicImageCardText__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicImageCardText__ArgsType,
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
          internalArgPropNames: PlasmicImageCardText__ArgProps,
          internalVariantPropNames: PlasmicImageCardText__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicImageCardText__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicImageCardText";
  } else {
    func.displayName = `PlasmicImageCardText.${nodeName}`;
  }
  return func;
}

export const PlasmicImageCardText = Object.assign(
  // Top-level PlasmicImageCardText renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    imagaeAndText: makeNodeComponent("imagaeAndText"),
    img: makeNodeComponent("img"),
    freeBox: makeNodeComponent("freeBox"),
    columns: makeNodeComponent("columns"),

    // Metadata about props expected for PlasmicImageCardText
    internalVariantProps: PlasmicImageCardText__VariantProps,
    internalArgProps: PlasmicImageCardText__ArgProps
  }
);

export default PlasmicImageCardText;
/* prettier-ignore-end */