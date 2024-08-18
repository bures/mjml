import mjml2html, { components, assignComponents, BodyComponent, HeadComponent } from 'mjml-core'
import { dependencies, assignDependencies } from 'mjml-validator'
import defaultSkeleton from 'mjml-core/lib/helpers/skeleton'
import presetCore from 'mjml-preset-core'

assignComponents(components, presetCore.components)
assignDependencies(dependencies, presetCore.dependencies)

export {presetCore, defaultSkeleton, components, dependencies, assignDependencies, assignComponents, BodyComponent, HeadComponent}
export default mjml2html
