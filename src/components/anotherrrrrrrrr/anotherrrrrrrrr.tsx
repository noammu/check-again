import classNames from 'classnames';
import styles from './anotherrrrrrrrr.module.scss';

export interface AnotherrrrrrrrrProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Anotherrrrrrrrr = ({ className }: AnotherrrrrrrrrProps) => {
    return <div className={classNames(styles.root, className)}>Anotherrrrrrrrr</div>;
};
