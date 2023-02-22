// eslint-disable-next-line vue/prefer-import-from-vue
import { isString } from '@vue/shared'
import { useNamespace } from 'packages/hooks/use-namespace'
import { ExtractPropTypes } from 'vue'

export type AvatarProps = ExtractPropTypes<typeof avatarProps>
export const avatarProps = {
  src: {
    type: String
  },
  icon: {
    type: String
  },
  size: {
    type: [String, Number]
  },
  shape: {
    type: String,
    values: ['circle', 'square'],
    default: 'circle'
  }
}

export const useAvatarClasses = (props: AvatarProps) => {
  const ns = useNamespace('avatar')
  const res = [ns.baseName]

  if (props.size && isString(props.size)) {
    res.push(ns.addModifier(props.size))
  }
  res.push(ns.addModifier(props.shape))

  return res
}
