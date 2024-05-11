// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tDWy3GXn2mzd9e2xUaPdmu
// Component: Fn4_X6LSrEZk

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

import {
  executePlasmicDataOp,
  usePlasmicDataOp,
  usePlasmicInvalidate
} from "@plasmicapp/react-web/lib/data-sources";

import TextInput from "../../TextInput"; // plasmic-import: xwgFLXqL07mD/component
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: tDWy3GXn2mzd9e2xUaPdmu/projectcss
import sty from "./PlasmicLoginRegister.module.css"; // plasmic-import: Fn4_X6LSrEZk/css

import SearchsvgIcon from "./icons/PlasmicIcon__Searchsvg"; // plasmic-import: TfB627kbYt5s/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: BLgPkmgd4hOv/icon

createPlasmicElementProxy;

export type PlasmicLoginRegister__VariantMembers = {
  signUpflow: "signUpflow";
};
export type PlasmicLoginRegister__VariantsArgs = {
  signUpflow?: SingleBooleanChoiceArg<"signUpflow">;
};
type VariantPropType = keyof PlasmicLoginRegister__VariantsArgs;
export const PlasmicLoginRegister__VariantProps = new Array<VariantPropType>(
  "signUpflow"
);

export type PlasmicLoginRegister__ArgsType = {
  password?: string;
  email?: string;
  children?: React.ReactNode;
};
type ArgPropType = keyof PlasmicLoginRegister__ArgsType;
export const PlasmicLoginRegister__ArgProps = new Array<ArgPropType>(
  "password",
  "email",
  "children"
);

export type PlasmicLoginRegister__OverridesType = {
  root?: Flex__<"div">;
};

export interface DefaultLoginRegisterProps {
  password?: string;
  email?: string;
  children?: React.ReactNode;
  signUpflow?: SingleBooleanChoiceArg<"signUpflow">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicLoginRegister__RenderFunc(props: {
  variants: PlasmicLoginRegister__VariantsArgs;
  args: PlasmicLoginRegister__ArgsType;
  overrides: PlasmicLoginRegister__OverridesType;
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

  let [$queries, setDollarQueries] = React.useState<
    Record<string, ReturnType<typeof usePlasmicDataOp>>
  >({});
  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "signUpflow",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.signUpflow
      },
      {
        path: "variable",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "variable2",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: $queries,
    $refs
  });

  const new$Queries: Record<string, ReturnType<typeof usePlasmicDataOp>> = {
    users: usePlasmicDataOp(() => {
      return {
        sourceId: "egnTD9CG9tqC7cm6ya647K",
        opId: "ee5a0464-7580-4b16-a154-f163b5846499",
        userArgs: {
          filters: [$props.email, $props.password]
        },
        cacheKey: `plasmic.$.ee5a0464-7580-4b16-a154-f163b5846499.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    })
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);

    $queries = new$Queries;
  }

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
        { [sty.rootsignUpflow]: hasVariant($state, "signUpflow", "signUpflow") }
      )}
      onClick={async event => {
        const $steps = {};

        $steps["goToLogin"] = true
          ? (() => {
              const actionArgs = { destination: "/login" };
              return (({ destination }) => {
                if (
                  typeof destination === "string" &&
                  destination.startsWith("#")
                ) {
                  document
                    .getElementById(destination.substr(1))
                    .scrollIntoView({ behavior: "smooth" });
                } else {
                  __nextRouter?.push(destination);
                }
              })?.apply(null, [actionArgs]);
            })()
          : undefined;
        if (
          $steps["goToLogin"] != null &&
          typeof $steps["goToLogin"] === "object" &&
          typeof $steps["goToLogin"].then === "function"
        ) {
          $steps["goToLogin"] = await $steps["goToLogin"];
        }

        $steps["updateVariable"] = true
          ? (() => {
              const actionArgs = {
                variable: {
                  objRoot: $state,
                  variablePath: ["variable"]
                },
                operation: 0
              };
              return (({ variable, value, startIndex, deleteCount }) => {
                if (!variable) {
                  return;
                }
                const { objRoot, variablePath } = variable;

                $stateSet(objRoot, variablePath, value);
                return value;
              })?.apply(null, [actionArgs]);
            })()
          : undefined;
        if (
          $steps["updateVariable"] != null &&
          typeof $steps["updateVariable"] === "object" &&
          typeof $steps["updateVariable"].then === "function"
        ) {
          $steps["updateVariable"] = await $steps["updateVariable"];
        }
      }}
    >
      {renderPlasmicSlot({
        defaultContents: (
          <React.Fragment>
            <div className={classNames(projectcss.all, sty.freeBox__hQwGl)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__wm41
                )}
              >
                {"llll"}
              </div>
            </div>
            <div className={classNames(projectcss.all, sty.freeBox___14AO5)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___3Oqfb
                )}
              >
                {"Create  account with Facebook"}
              </div>
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__ddC7)}
                displayHeight={"26px"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"26px"}
                loading={"lazy"}
                src={{
                  src: "/plasmic/duplicate_proliga_clone/images/_555Webp.webp",
                  fullWidth: 512,
                  fullHeight: 512,
                  aspectRatio: undefined
                }}
              />
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__wveWj)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__z9Raz
                )}
              >
                {"Create accaunt with Google"}
              </div>
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__zyr0B)}
                displayHeight={"auto"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"26px"}
                loading={"lazy"}
                src={{
                  src: "/plasmic/duplicate_proliga_clone/images/googleGLogosvgpng.png",
                  fullWidth: 768,
                  fullHeight: 768,
                  aspectRatio: undefined
                }}
              />
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__g3W1)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__esXKb
                )}
              >
                {"Create accaunt with Apple"}
              </div>
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__pAPa9)}
                displayHeight={"auto"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"36px"}
                loading={"lazy"}
                src={{
                  src: "/plasmic/duplicate_proliga_clone/images/imagespng.png",
                  fullWidth: 266,
                  fullHeight: 190,
                  aspectRatio: undefined
                }}
              />
            </div>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__ffr7H
              )}
            >
              {"OR LOGIN WITH EMAIL"}
            </div>
            <TextInput
              autoFocus={false}
              className={classNames("__wab_instance", sty.textInput__i0HvM)}
              name={"Email"}
              type={"email"}
              value={(() => {
                try {
                  return $queries.users.schema.fields[4].id;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return undefined;
                  }
                  throw e;
                }
              })()}
            />

            <TextInput
              className={classNames("__wab_instance", sty.textInput__znJzN)}
              placeholder={"Password"}
              type={"password"}
              value={(() => {
                try {
                  return $queries.users.schema.fields[1].id;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return undefined;
                  }
                  throw e;
                }
              })()}
            />

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__zWnpi
              )}
            >
              {"OR REGISTER USING YOUR EMAIL"}
            </div>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__vn1OX
              )}
              component={Link}
              href={"https://www.plasmic.app/"}
              onClick={async event => {
                const $steps = {};

                $steps["goToHomepage"] = true
                  ? (() => {
                      const actionArgs = { destination: `/` };
                      return (({ destination }) => {
                        if (
                          typeof destination === "string" &&
                          destination.startsWith("#")
                        ) {
                          document
                            .getElementById(destination.substr(1))
                            .scrollIntoView({ behavior: "smooth" });
                        } else {
                          __nextRouter?.push(destination);
                        }
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["goToHomepage"] != null &&
                  typeof $steps["goToHomepage"] === "object" &&
                  typeof $steps["goToHomepage"].then === "function"
                ) {
                  $steps["goToHomepage"] = await $steps["goToHomepage"];
                }

                $steps["updateTextInputValue"] = true
                  ? (() => {
                      const actionArgs = {
                        variable: {
                          objRoot: $state,
                          variablePath: ["textInput", "value"]
                        },
                        operation: 0
                      };
                      return (({
                        variable,
                        value,
                        startIndex,
                        deleteCount
                      }) => {
                        if (!variable) {
                          return;
                        }
                        const { objRoot, variablePath } = variable;

                        $stateSet(objRoot, variablePath, value);
                        return value;
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["updateTextInputValue"] != null &&
                  typeof $steps["updateTextInputValue"] === "object" &&
                  typeof $steps["updateTextInputValue"].then === "function"
                ) {
                  $steps["updateTextInputValue"] = await $steps[
                    "updateTextInputValue"
                  ];
                }
              }}
              platform={"nextjs"}
              target={"_blank"}
            >
              {"CREATE AN ACCOUNT"}
            </PlasmicLink__>
            <div className={classNames(projectcss.all, sty.freeBox__f8Rih)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__nftLy
                )}
              >
                {"I have an Account,"}
              </div>
              <PlasmicLink__
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__j0Raw
                )}
                component={Link}
                href={"/login"}
                platform={"nextjs"}
              >
                {"Start Session"}
              </PlasmicLink__>
            </div>
          </React.Fragment>
        ),
        value: args.children
      })}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLoginRegister__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLoginRegister__VariantsArgs;
    args?: PlasmicLoginRegister__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicLoginRegister__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicLoginRegister__ArgsType,
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
          internalArgPropNames: PlasmicLoginRegister__ArgProps,
          internalVariantPropNames: PlasmicLoginRegister__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicLoginRegister__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLoginRegister";
  } else {
    func.displayName = `PlasmicLoginRegister.${nodeName}`;
  }
  return func;
}

export const PlasmicLoginRegister = Object.assign(
  // Top-level PlasmicLoginRegister renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicLoginRegister
    internalVariantProps: PlasmicLoginRegister__VariantProps,
    internalArgProps: PlasmicLoginRegister__ArgProps
  }
);

export default PlasmicLoginRegister;
/* prettier-ignore-end */
