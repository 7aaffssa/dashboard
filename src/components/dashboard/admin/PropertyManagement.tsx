import React from 'react';
import { Property } from '../../../types';
import { Edit, Trash2 } from 'lucide-react';

interface PropertyManagementProps {
  properties: Property[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export const PropertyManagement: React.FC<PropertyManagementProps> = ({
  properties,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Property Management</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          Add Property
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Location</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {properties.map((property) => (
              <tr key={property.id}>
                <td className="px-6 py-4">{property.title}</td>
                <td className="px-6 py-4">{property.location}</td>
                <td className="px-6 py-4">${property.price.toLocaleString()}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    property.status === 'for-sale' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {property.status === 'for-sale' ? 'For Sale' : 'For Rent'}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => onEdit(property.id)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <Edit size={18} />
                    </button>
                    <button
                      onClick={() => onDelete(property.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};