import {
  useGetUsersQuery,
  useDeleteUserMutation
} from '../../slices/usersApiSlice'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button } from 'react-bootstrap'
//import { FaTrash, FaEdit, FaCheck, FaTimes } from 'react-icons/fa'
import {
  Icon,
  TRASH_ICON,
  EDIT_ICON,
  CHECK_ICON,
  TIMES_ICON
} from '../../components/icons'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import { toast } from 'react-toastify'

const UserListScreen = () => {
  const { data: users, refetch, isLoading, error } = useGetUsersQuery()

  const [deleteUser, { isLoading: loadingDelete }] = useDeleteUserMutation()

  const deleteHandler = async (id) => {
    if (window.confirm('Are you sure?')) {
      try {
        await deleteUser(id)
        refetch()
        toast.success('User deleted')
      } catch (err) {
        toast.error(err?.data?.message || err.error)
      }
    }
  }
  return (
    <>
      <h1>Users</h1>
      {loadingDelete && <Loader />}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Table striped hover responsive className='table-sm'>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>ADMIN</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>
                  <a href={`mailto:${user.email}`}>{user.email}</a>
                </td>
                <td>
                  {user.isAdmin ? (
                    <Icon icon={CHECK_ICON} style={{ color: 'green' }} />
                  ) : (
                    <Icon icon={TIMES_ICON} style={{ color: 'red' }} />
                  )}
                </td>

                <td>
                  <LinkContainer to={`/admin/user/${user._id}/edit`}>
                    <Button variant='link' className='btn-sm'>
                      <Icon icon={EDIT_ICON} />
                    </Button>
                  </LinkContainer>
                  <Button
                    variant='link'
                    className='btn-sm'
                    onClick={() => deleteHandler(user._id)}
                  >
                    <Icon icon={TRASH_ICON} style={{ color: 'red' }} />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  )
}
export default UserListScreen
