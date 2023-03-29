import { Component } from 'react';
import styles from './ImageGalleryItem.module.css'
import Modal from '../Modal/Modal'

class ImageGalleryItem extends Component {
    state = {
        showModal: false,
    }

    toggleModal = () => {
        this.setState(({ showModal }) => {
            return { showModal: !showModal }
        })
    }

    handleCloseModal = (evt) => {
        if (evt.currentTarget === evt.target) {
            this.toggleModal()
        }
    }

    render() {
        const { image, id, largeImage, alt } = this.props
        const { showModal } = this.state

        return (

            <li className={styles.ImageGalleryItem}>
                <img onClick={this.toggleModal} src={image} id={id} className={styles.ImageGalleryItem__image} alt={alt} />
                {showModal && <Modal onCloseModal={this.handleCloseModal} closeKeyDown={this.toggleModal} largeImage={largeImage} />}
            </li >

        )

    }
}

export default ImageGalleryItem;