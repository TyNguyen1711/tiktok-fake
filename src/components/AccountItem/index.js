import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './AccountItem.module.scss';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function AccoutItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7bcbea3d83aca4453167adaeb66d7af6~c5_100x100.jpeg?lk3s=30310797&nonce=68776&refresh_token=c7dbd8dda7d731a7af0bd3789d594295&x-expires=1726016400&x-signature=%2B%2FYAwgPLk5YhvWIjKT7UzI%2F5H0E%3D&shp=30310797&shcp=-"
                alt="Hoa"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>Nguyenvana</span>
            </div>
        </div>
    );
}

export default AccoutItem;
